const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.cjs')
const ensureLoggedIn = require('../config/ensureLoggedIn.cjs')


router.get("/inventories", ensureLoggedIn, productsController.getProducts) 
router.get("/:id", ensureLoggedIn, productsController.getProductInfo) 
router.post("/add-inventory", ensureLoggedIn, productsController.createProduct) 
router.put("/update-inventory/:id", ensureLoggedIn,  productsController.updateProductInfo) 
router.delete("/delete-inventory/:id", ensureLoggedIn, productsController.deleteProduct) 


// function print(){
//     console.log('reached')
// }
module.exports = router;  