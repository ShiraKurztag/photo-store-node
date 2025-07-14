const Basket = require("../models/basket")
const User = require("../models/users")
const getAllBasket = async (req, res) => {
    const user=req.user
    const allUser=await User.findOne({name:user.name})
    const baskets = await Basket.find({user:allUser._id}).populate('products').lean()
    

    if (!baskets.length) {
        return res.status(400).json({ message: "No poto found" })
    }
    res.json(baskets)
}

const postBasket = async (req, res) => {

    try {
        const product = req.body.props
        const user = await User.findOne({ userName: req.user.userName })
                   
        const baskets = await Basket.create({
            user,
           products: product
        });
        res.json(baskets)
    }
    catch (error) {
        res.send(error)
    }

}
const deletBasket = async (req, res) => {
    const { id } = req.params
    const baskets = await Basket.findById(id).exec()
    if (!baskets) {
        return res.status(400).json({ message: "No basket found" })
    }
    const result = await baskets.deleteOne()
    const reply = `Basket '${result.products}' ID ${result._id} deleted`
    res.json(reply)
}


module.exports = { getAllBasket, postBasket, deletBasket }