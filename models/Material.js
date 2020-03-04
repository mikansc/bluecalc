const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    name: String,
    buyUnit: String,
    buyQuantity: Number,
    size: {
        width: Number,
        heigth: Number,
        lenght: Number,
        weight: Number
    },
    quantity: Number,
    price: Number,
    unityPrice: Number,
    lastUpdate: Date
});

module.exports = mongoose.model("Material", MaterialSchema);