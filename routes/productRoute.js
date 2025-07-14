
const express = require("express")
const verifyJWT=require("../middleware/verifyJWT")
const router = express.Router()
const productController=require("../controller/productController")
const Poto = require("../models/product");

// router.use(verifyJWT)

router.post("/",verifyJWT, productController.postPoto)
router.get("/",productController.getAllPoto)
router.get("/:id",productController.getPotobyid)
router.put("/:id",verifyJWT,productController.updataPoto)
router.delete("/:id",verifyJWT,productController.deletPoto)

module.exports = router