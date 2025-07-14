const mongoose = require("mongoose");
const basketSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"user"
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"product"

    }
}, {
    timestamps: true
})
module.exports = mongoose.model('basket',basketSchema )