const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  buyUnit: String,
  buyQuantity: Number,
  size: {
    width: { type: Number },
    lenght: { type: Number },
    weight: { type: Number }
  },
  quantity: Number,
  price: Number,
  unityPrice: Number,
  lastUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Material', MaterialSchema);
