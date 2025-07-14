const express=require("express")
const verifyJWT=require("../middleware/verifyJWT")
const basketController=require("../controller/basketController")
const router=express.Router()

router.get("/",verifyJWT,basketController.getAllBasket)
router.post("/",verifyJWT,basketController.postBasket)
router.delete("/:id",verifyJWT,basketController.deletBasket)

module.exports = router
