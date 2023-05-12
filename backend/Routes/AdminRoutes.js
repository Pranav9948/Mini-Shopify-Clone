const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const Store = require('../models/storeModel');

// Add a new product


router.post('/products', async (req, res) => {
  try {
    const { name, description, storeName, price, image } = req.body;
    const store = await  Store.findOne({ name: storeName });
    if (!store) {
      return res.status(400).json({ message: 'Invalid store name' });
    }
   
    const product = new Product({ name, description,store, price, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});





// Create a new store

router.post('/store', async (req, res) => {
  try {
    const { name,description, image } = req.body;
    const store = new Store({ name, image,description });
    await store.save();
    res.status(201).json(store);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
