


const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  installed: {
    type: String,
   default:false,
  },


  image: {
    type: String,
    required: true,
  },
});

const Store = mongoose.model('store',storeSchema);

module.exports = Store;
