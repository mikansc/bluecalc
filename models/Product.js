const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    materials: {
        rawMaterial: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Material'
        },
        quantity: Number
    },
    salePrice: Number,
    lastUpdate: Date
});

module.exports = mongoose.model("Product", ProductSchema);