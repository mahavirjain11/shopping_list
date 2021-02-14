const express = require('express');
const router = express.Router();

// USe Product Model
const Product = require('../models/Product-model');

//@route  GET products
//@desc   Get All Products

router.get('/' ,(req,res) => {
    Product.find()
            .sort({date: -1})
            .then(products => res.json(products))
})

//@route  POST products
//@desc   Create a Product

router.post('/' ,(req,res) => {
   const newProduct = new Product({
       name: req.body.name
   });
   newProduct.save().then(product => res.json(product));
});

//@route  DELETE products/:id
//@desc   DELETE a product

router.delete('/:id' ,(req,res) => {
   Product.findById(req.params.id)
          .then(product => product.remove().then( () => res.json({success: true})))  
          .catch(err => res.status(404).json({success: false}));
 });
 
 module.exports = router;