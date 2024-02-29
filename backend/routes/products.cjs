const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.cjs')


router.get("/inventories", productsController.getProducts) 
router.get("/:id", productsController.getProductInfo) 
router.post("/add-inventory", productsController.createProduct) 
router.put("/update-inventory/:id", productsController.updateProductInfo) 
router.delete("/delete-inventory/:id", productsController.deleteProduct) 


function print(){
    console.log('reached')
}
module.exports = router;  