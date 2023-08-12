const mongoose = require('mongoose');

const subProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
  subProName: { type: String, required: true },
  subDesc: { type: String, required: true },
  subFeatures: { type: [String], required: true },
  price: { type: String, required: true },
  oneMoreFeat: { type: String, required: true },
});

const mainProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  mainProName: { type: String, required: true },
  mainDesc: { type: String, required: true },
  subProducts: { type: [subProductSchema], required: true },
});

const MainProduct = mongoose.model('MainProduct', mainProductSchema);

module.exports = MainProduct;
