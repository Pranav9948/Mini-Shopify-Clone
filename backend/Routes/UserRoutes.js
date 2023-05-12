
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const Store=require('../models/storeModel')






  // Get store information

router.get('/store', async (req, res) => {
  
    try {
      
      const store = await Store.find();
      res.json(store);
      console.log('store',store);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  router.get('/products/:id', async (req, res) => {
    try {
      const products = await Product.find({ store: req.params.id});
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });



  router.patch('/stores/:id/install', async (req, res) => {
    try {
        console.log('reached...');
      const updatedStore = await Store.findOneAndUpdate(
        { _id: req.params.id},
        { $set: { installed: true } },
        { new: true }
      );
      res.json(updatedStore);
    } catch (err) { 
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });


  router.get('/stores/installed', async (req, res) => {
    console.log("backend reached...");
    try {
      const installedStores = await Store.find({ installed: true });
      res.json(installedStores);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });




  
module.exports = router;
  