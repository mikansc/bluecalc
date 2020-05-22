const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  productName: String,
  materials: [
    {
      rawMaterial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
      },
      size: {
        width: { type: Number },
        lenght: { type: Number },
        weight: { type: Number }
      },
      quantity: Number
    }
  ],
  salePrice: Number,
  lastUpdate: Date
});

module.exports = mongoose.model('Product', ProductSchema);
