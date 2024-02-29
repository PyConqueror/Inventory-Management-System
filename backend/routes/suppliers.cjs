const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/suppliers.cjs')


router.get("/suppliers", supplierController.getSupplier) 


module.exports = router;  