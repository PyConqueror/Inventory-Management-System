const Product = require('../models/inventory.cjs')
const Supplier = require('../models/supplier.cjs')

module.exports = {
    createProduct,
    getProducts,
    getProductInfo,
    updateProductInfo,
    deleteProduct
}

async function createProduct(req, res) {
    const {itemName, description, stockQuantity, supplier} = req.body
    const newProduct = new Product({
        itemName: itemName,
        description: description,
        stockQuantity: stockQuantity,
        supplier: supplier
    })
    await newProduct.save()
    return res.status(200)
}

async function getProducts(req, res) {
    const search = req.query.search;
    let query = {};
    if (search) {
        const regex = new RegExp(search, 'i'); //regex pattern to be case sensitive
        query = { $or: [
            { itemName: regex },
            { description: regex }
        ]};
        }
        const products = await Product.find(query).populate('supplier');
        res.json(products);
}

async function getProductInfo(req, res) {
    const product = await Product.findById(req.params.id).populate('supplier')
    return res.json(product)
}

async function updateProductInfo(req, res) {
    const productID = req.params.id
    const data = req.body
    const updatedProduct = await Product.findByIdAndUpdate(productID, data);
    return res.status(200)
}

async function deleteProduct(req, res) {
    const productID = req.params.id
    const product = await Product.findByIdAndDelete(productID)
    return res.status(200)
}