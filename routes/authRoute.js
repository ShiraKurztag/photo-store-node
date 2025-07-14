const express=require("express")
const authConroller=require("../controller/authController")
const router=express.Router()

router.post("/login",authConroller.login)
router.post("/register",authConroller.register)

module.exports=router