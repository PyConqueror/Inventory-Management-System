const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.cjs')


router.get("/inventories", productsController.getProducts) 
router.get("/:id", productsController.getProductInfo) 
router.post("/add-inventory", productsController.createProduct) 
router.get("/update-inventory/:id", productsController.updateProductInfo) 
router.get("/delete-inventory/:id", productsController.deleteProduct) 


function print(){
    console.log('reached')
}
module.exports = router;  