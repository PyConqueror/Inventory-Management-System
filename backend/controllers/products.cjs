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
    const {itemName, description, quantity, supplier} = req.body
    const newProduct = new Product({
        itemName: itemName,
        description: description,
        stockQuantity: quantity,
        supplier: supplier
    })
    await newProduct.save()
    return res.status(203)
}

async function getProducts(req, res) {
    const products = await Product.find()
    return res.json(products)
}

async function getProductInfo(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
}

async function updateProductInfo(req, res) {
    const productID = req.params.id
    const data = req.body

    if(data.supplier) {
        const supplierID = data.supplier
        const updateProductSupplier = Product.findByIdAndUpdate(
            productID, 
            {supplier:supplierID})
        await updateProductSupplier.save()
    }
    if(data.description) {
        const description = data.description
        const updateProductDescription = Product.findByIdAndUpdate(
            productID, 
            {description:description})
        await updateProductDescription.save()
    }

    return res.status(200)
}

async function deleteProduct(req, res) {
    const productID = req.params.id
    const product = await Product.findByIdAndDelete(productID)
    return res.status(200)
}