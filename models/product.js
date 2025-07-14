const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    type: {
       type:String,
       enum:["תמונה","עץ","זכוכית","אבן","קנבס","קיץ","חורף",],
       required:true,
    },
    stuck:{
        type:Boolean,
        default:true,
    },
    picture:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('product', productSchema)
