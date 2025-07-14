const Poto = require("../models/product")

const getAllPoto = async (req, res) => {
    const poto = await Poto.find().lean()
    if (!poto.length) {
        return res.status(400).json({ message: "No poto found" })
    }
    res.json(poto)
}

const postPoto = async (req, res) => {
    const { name,
        code,
        price,
        type,
        stuck,
        picture,
        timestamps,
    } = req.body
    const poto = await Poto.create({
        name,
        code,
        price,
        type,
        stuck,
        picture,
        timestamps
    });
    res.json(poto)
}

const getPotobyid = async (req, res) => {
    const { id } = req.params
    //papulate
    const poto = await Poto.findById(id).lean()
    if (!poto) {
        return res.status(400).json({ message: "No poto found" })
    }
    res.json(poto)
}

const updataPoto = async (req, res) => {
    const { name, code, price, type, stuck, picture, timestamps } = req.body
    const {id} = req.params
    if (!id || !name||!code||!price||!type||!picture) {
        return res.status(400).json({ message: "fields are required" })
    }
    const poto = await Poto.findById(id).exec()
    if (!poto) {
        return res.status(400).json({ message: "No poto found" })
    }
    poto.name = name
    poto.code = code
    poto.price = price
    poto.type = type
    poto.stuck = stuck
    poto.picture = picture
    poto.timestamps = timestamps
    const updataPoto = await poto.save()
    res.json(`'${updataPoto.name}' updated`)
}

const deletPoto = async (req, res) => {
    const { id } = req.params
    const poto = await Poto.findById(id).exec()
    if (!poto) {
        return res.status(400).json({ message: "No Poto found" })
    }
    const result = await poto.deleteOne()
    const reply = `Poto '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}



module.exports = { getAllPoto, postPoto, getPotobyid, updataPoto, deletPoto }
