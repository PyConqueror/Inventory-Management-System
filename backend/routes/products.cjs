const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.cjs')


router.get("/inventories", productsController.getProducts) 
router.get("/add-inventory", productsController.createProduct) 
router.get("/update-inventory/:id", productsController.updateProductInfo) 
router.get("/delete-inventory/:id", productsController.deleteProduct) 

module.exports = router;  