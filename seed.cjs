require('dotenv').config();
require('./backend/config/database.cjs'); 

const Product = require('./backend/models/inventory.cjs'); 
const Supplier = require('./backend/models/supplier.cjs'); 

const seedSuppliers = [
  { name: 'Supplier One' },
  { name: 'Supplier Two' },
  { name: 'Supplier Three' }
];

async function seedDB() {
  await Product.deleteMany({});
  await Supplier.deleteMany({});

  const createdSuppliers = await Supplier.insertMany(seedSuppliers);

  const seedProducts = [
    { itemName: 'Eco-Friendly Notebook', description: '100% recycled paper notebook for all your writing needs', stockQuantity: 120, supplier: createdSuppliers[0]._id },
    { itemName: 'Stainless Steel Water Bottle', description: 'Insulated, durable water bottle for hot and cold beverages', stockQuantity: 85, supplier: createdSuppliers[1]._id },
    { itemName: 'Bamboo Keyboard', description: 'Sustainable, wireless bamboo keyboard compatible with all devices', stockQuantity: 45, supplier: createdSuppliers[2]._id },
    { itemName: 'Solar Powered Charger', description: 'Portable solar powered charger for eco-friendly charging on the go', stockQuantity: 75, supplier: createdSuppliers[1]._id },
    { itemName: 'Organic Cotton T-Shirt', description: 'Soft, organic cotton t-shirt available in various sizes and colors', stockQuantity: 150, supplier: createdSuppliers[2]._id },
    { itemName: 'Reusable Straw Set', description: 'Stainless steel and silicone straw set with cleaning brush', stockQuantity: 200, supplier: createdSuppliers[1]._id },
    { itemName: 'Biodegradable Phone Case', description: 'Eco-friendly, compostable phone case for iPhone and Android', stockQuantity: 100, supplier: createdSuppliers[0]._id },
    { itemName: 'LED Desk Lamp', description: 'Energy-efficient LED desk lamp with adjustable brightness', stockQuantity: 60, supplier: createdSuppliers[1]._id },
    { itemName: 'Herbal Tea Collection', description: 'Organic herbal tea assortment for relaxation and wellness', stockQuantity: 130, supplier: createdSuppliers[2]._id },
    { itemName: 'Natural Soap Bars', description: 'Handmade, vegan soap bars with essential oils', stockQuantity: 90, supplier: createdSuppliers[1]._id },
  ];
  
  await Product.insertMany(seedProducts);
  console.log('Database seeded!');
}

seedDB()
