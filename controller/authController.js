const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user = require("../models/users")
const login = async (req, res) => {
    const { userName, password } = req.body
    //validation
    if (!userName || !password) {
        return res.status(400).json({ massage: "All field are required" })
    }
    const foundeedUser = await user.findOne({ userName: userName }).lean()
    if (!foundeedUser || !foundeedUser.active) {
        return res.status(401).json({ massage: "Unauhorized" })
    }

    const match = await bcrypt.compare(password, foundeedUser.password)
    if (!match) {
        return res.status(401).json({ massage: "Unauhorized" })
    }
    const userInfo = {
        id: foundeedUser.id,
        name: foundeedUser.name,
        userName: foundeedUser.userName,
        roles: foundeedUser.roles,
        email: foundeedUser.email
    }
    const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)


    res.json({ token })
}

const register = async (req, res) => {
    const { userName, password, name, email ,phon} = req.body
    //validation
    if (!userName || !password || !name || !email) {
        return res.status(400).json({ massage: "All field are required" })
    }
    //check for duplicate
    const duplicatUser = await user.findOne({ userName: userName }).lean()
    if (duplicatUser) {
        return res.status(409).json({ massage: "duplicate user" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user1 = await user.create({ userName, password: hashPassword, name, email, phon })
    if (!user1) {
        return res.status(400).json({ massage: "  requst" })
    }

    return res.json({ massage: `user ${user1.name} created` })

}

module.exports = { login, register }