const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    name: String,
    buyUnit: String,
    buyQuantity: Number,
    size: {
        width: Number,
        heigth: Number,
        defWidth: Number,
        lenght: Number,
        weight: Number,
        liters: Number
    },
    quantity: Number,
    price: Number,
    unityPrice: Number,
    lastUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Material", MaterialSchema);