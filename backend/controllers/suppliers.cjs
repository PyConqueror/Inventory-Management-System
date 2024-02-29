const Supplier = require('../models/supplier.cjs')

module.exports = {
    getSupplier
}

async function getSupplier(req, res) {
    const suppliers = await Supplier.find()
    return res.json(suppliers)
}

