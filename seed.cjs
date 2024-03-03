require('dotenv').config();
require('./backend/config/database.cjs'); 

const Product = require('./backend/models/inventory.cjs'); 
const Supplier = require('./backend/models/supplier.cjs'); 

const seedSuppliers = [
  { name: 'Supplier One' },
  { name: 'Supplier Two' },
  { name: 'Supplier Three' },
  { name: 'Supplier Four' },
];

async function seedDB() {
  await Product.deleteMany({});
  await Supplier.deleteMany({});

  const createdSuppliers = await Supplier.insertMany(seedSuppliers);

  const seedProducts = [
    { itemName: 'Recycled Glass Vase', description: 'Beautiful vase made from recycled glass, perfect for displaying flowers', stockQuantity: 50, supplier: createdSuppliers[0]._id },
    { itemName: 'Fair Trade Coffee Beans', description: 'Ethically sourced coffee beans from sustainable farms around the world', stockQuantity: 80, supplier: createdSuppliers[2]._id },
    { itemName: 'Hemp Backpack', description: 'Durable backpack made from eco-friendly hemp fibers', stockQuantity: 65, supplier: createdSuppliers[2]._id },
    { itemName: 'Solar-Powered Outdoor Lights', description: 'Decorative outdoor lights powered by solar energy, ideal for gardens and patios', stockQuantity: 110, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Tire Doormat', description: 'Stylish doormat made from recycled rubber tires, perfect for eco-conscious homes', stockQuantity: 40, supplier: createdSuppliers[2]._id },
    { itemName: 'Bamboo Cutlery Set', description: 'Reusable cutlery set made from sustainable bamboo, includes fork, knife, and spoon', stockQuantity: 95, supplier: createdSuppliers[3]._id },
    { itemName: 'Organic Cotton Bed Sheets', description: 'Luxurious bed sheets made from organic cotton, offering comfort and sustainability', stockQuantity: 75, supplier: createdSuppliers[2]._id },
    { itemName: 'Recycled Paper Stationery Set', description: 'Stationery set including notebooks, pens, and envelopes made from recycled paper', stockQuantity: 120, supplier: createdSuppliers[1]._id },
    { itemName: 'Bee-friendly Wildflower Seeds', description: 'Packet of wildflower seeds specially selected to attract and support bees', stockQuantity: 200, supplier: createdSuppliers[2]._id },
    { itemName: 'Compost Bin', description: 'Compact compost bin for organic waste, promoting eco-friendly disposal practices', stockQuantity: 55, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Plastic Plant Pots', description: 'Sturdy plant pots made from recycled plastic, suitable for indoor and outdoor use', stockQuantity: 90, supplier: createdSuppliers[0]._id },
    { itemName: 'Fair Trade Chocolate Bars', description: 'Delicious chocolate bars made from ethically sourced cocoa beans, supporting fair trade practices', stockQuantity: 150, supplier: createdSuppliers[3]._id },
    { itemName: 'Reusable Beeswax Wraps', description: 'Eco-friendly alternative to plastic wrap, made from beeswax-infused cotton fabric', stockQuantity: 70, supplier: createdSuppliers[2]._id },
    { itemName: 'Sustainable Bamboo Toothbrush', description: 'Biodegradable toothbrush made from bamboo, with soft bristles for gentle cleaning', stockQuantity: 100, supplier: createdSuppliers[1]._id },
    { itemName: 'Recycled Polyester Backpack', description: 'Versatile backpack made from recycled polyester, featuring multiple compartments for organization', stockQuantity: 85, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Lavender Essential Oil', description: 'Pure essential oil extracted from organically grown lavender plants, perfect for aromatherapy', stockQuantity: 120, supplier: createdSuppliers[3]._id },
    { itemName: 'Soy Wax Candles', description: 'Hand-poured candles made from natural soy wax, infused with essential oils for a delightful fragrance', stockQuantity: 110, supplier: createdSuppliers[2]._id },
    { itemName: 'Upcycled Glass Jewelry', description: 'Unique jewelry pieces crafted from upcycled glass bottles, showcasing creativity and sustainability', stockQuantity: 60, supplier: createdSuppliers[0]._id },
    { itemName: 'Eco-Friendly Yoga Mat', description: 'Non-toxic yoga mat made from eco-friendly materials, providing cushioning and stability during practice', stockQuantity: 130, supplier: createdSuppliers[2]._id },
    { itemName: 'Reusable Cloth Diapers', description: 'Soft and absorbent cloth diapers made from organic cotton, reducing waste and promoting sustainability in parenting', stockQuantity: 75, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Plastic Picnic Set', description: 'Picnic set including plates, cups, and utensils made from recycled plastic, perfect for outdoor dining', stockQuantity: 95, supplier: createdSuppliers[2]._id },
    { itemName: 'Fair Trade Organic Quinoa', description: 'Nutritious quinoa grains sourced from fair trade, organic farms, providing a sustainable and ethical food option', stockQuantity: 85, supplier: createdSuppliers[3]._id },
    { itemName: 'Bamboo Fiber Bath Towels', description: 'Luxuriously soft bath towels made from bamboo fiber, highly absorbent and quick-drying for ultimate comfort', stockQuantity: 120, supplier: createdSuppliers[2]._id },
    { itemName: 'Recycled Aluminum Water Bottle', description: 'Durable water bottle made from recycled aluminum, featuring a leak-proof design for on-the-go hydration', stockQuantity: 100, supplier: createdSuppliers[3]._id },
    { itemName: 'Organic Hemp Dog Collar', description: 'Stylish and durable dog collar made from organic hemp, ensuring comfort and sustainability for your furry friend', stockQuantity: 80, supplier: createdSuppliers[0]._id },
    { itemName: 'Solar-Powered Garden Fountain', description: 'Decorative garden fountain powered by solar energy, creating a tranquil atmosphere with flowing water', stockQuantity: 70, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Glass Candle Holders', description: 'Elegant candle holders made from recycled glass, adding a touch of eco-friendly sophistication to any space', stockQuantity: 90, supplier: createdSuppliers[2]._id },
    { itemName: 'Fair Trade Organic Honey', description: 'Pure and delicious honey sourced from fair trade, organic beekeepers, supporting sustainable beekeeping practices', stockQuantity: 110, supplier: createdSuppliers[3]._id },
    { itemName: 'Reusable Silicone Food Storage Bags', description: 'Versatile food storage bags made from durable silicone, providing a sustainable alternative to single-use plastic bags', stockQuantity: 130, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Cotton Baby Onesies', description: 'Soft and breathable baby onesies made from organic cotton, gentle on delicate skin and kind to the environment', stockQuantity: 150, supplier: createdSuppliers[1]._id },
    { itemName: 'Recycled Plastic Patio Furniture', description: 'Durable and weather-resistant patio furniture made from recycled plastic, perfect for outdoor relaxation and entertaining', stockQuantity: 70, supplier: createdSuppliers[2]._id },
    { itemName: 'Sustainable Bamboo Toothbrush', description: 'Biodegradable toothbrush made from sustainable bamboo and BPA-free bristles', stockQuantity: 120, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Beeswax Candle Set', description: 'Set of handmade candles made from organic beeswax and essential oils', stockQuantity: 90, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Paper Art Prints', description: 'Art prints made on recycled paper, featuring eco-friendly designs', stockQuantity: 65, supplier: createdSuppliers[2]._id },
    { itemName: 'Fair Trade Chocolate Bars', description: 'Delicious chocolate bars made from ethically sourced cocoa beans, supporting fair trade practices', stockQuantity: 110, supplier: createdSuppliers[3]._id },
    { itemName: 'Upcycled Denim Tote Bag', description: 'Fashionable tote bag made from upcycled denim jeans, perfect for shopping or carrying essentials', stockQuantity: 40, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Bamboo Bath Towels', description: 'Luxurious bath towels made from organic bamboo fibers, offering softness and absorbency', stockQuantity: 95, supplier: createdSuppliers[3]._id },
    { itemName: 'Reusable Silicone Food Bags', description: 'Eco-friendly alternative to plastic bags, made from food-grade silicone, perfect for storing snacks and leftovers', stockQuantity: 75, supplier: createdSuppliers[0]._id },
    { itemName: 'Recycled Plastic Outdoor Furniture', description: 'Durable outdoor furniture made from recycled plastic, resistant to weather and UV rays', stockQuantity: 120, supplier: createdSuppliers[1]._id },
    { itemName: 'Organic Cotton Baby Onesies', description: 'Gentle and soft onesies made from organic cotton, perfect for sensitive baby skin', stockQuantity: 200, supplier: createdSuppliers[2]._id },
    { itemName: 'Biodegradable Bamboo Plates', description: 'Disposable plates made from biodegradable bamboo fibers, ideal for parties and picnics', stockQuantity: 55, supplier: createdSuppliers[3]._id },
    { itemName: 'Solar-Powered Garden Fountain', description: 'Decorative garden fountain powered by solar energy, adding a tranquil touch to outdoor spaces', stockQuantity: 85, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Cotton Socks', description: 'Comfortable socks made from organic cotton, available in various colors and sizes', stockQuantity: 70, supplier: createdSuppliers[0]._id },
    { itemName: 'Recycled Aluminum Watering Can', description: 'Sturdy watering can made from recycled aluminum, perfect for tending to indoor plants or gardens', stockQuantity: 100, supplier: createdSuppliers[1]._id },
    { itemName: 'Eco-Friendly Laptop Sleeve', description: 'Protective laptop sleeve made from eco-friendly materials such as recycled PET fabric', stockQuantity: 45, supplier: createdSuppliers[3]._id },
    { itemName: 'Handwoven Seagrass Basket', description: 'Versatile basket handwoven from sustainable seagrass, ideal for storage or decorative purposes', stockQuantity: 130, supplier: createdSuppliers[0]._id },
    { itemName: 'Natural Bamboo Cutting Board', description: 'Durable cutting board made from natural bamboo, perfect for chopping fruits, vegetables, and meats', stockQuantity: 80, supplier: createdSuppliers[1]._id },
    { itemName: 'Recycled Glass Soap Dispenser', description: 'Elegant soap dispenser made from recycled glass, adding a touch of eco-friendliness to your bathroom or kitchen', stockQuantity: 60, supplier: createdSuppliers[2]._id },
    { itemName: 'Organic Beeswax Lip Balm', description: 'Moisturizing lip balm made from organic beeswax and natural oils, keeping your lips soft and nourished', stockQuantity: 95, supplier: createdSuppliers[3]._id },
    { itemName: 'Reusable Stainless Steel Lunchbox', description: 'Sturdy lunchbox made from stainless steel, featuring compartments for storing a variety of foods, perfect for on-the-go meals', stockQuantity: 70, supplier: createdSuppliers[1]._id },
    { itemName: 'Fair Trade Handwoven Throw Blanket', description: 'Cozy throw blanket handwoven by artisans using fair trade practices, adding warmth and style to any room', stockQuantity: 85, supplier: createdSuppliers[0]._id },
    { itemName: 'Eco-Friendly Bamboo Toothbrush Holder', description: 'Convenient toothbrush holder made from sustainable bamboo, providing a stylish storage solution for your oral care essentials', stockQuantity: 100, supplier: createdSuppliers[1]._id },
    { itemName: 'Recycled Plastic Outdoor Planters', description: 'Stylish outdoor planters made from recycled plastic, perfect for showcasing your favorite flowers, herbs, or succulents', stockQuantity: 45, supplier: createdSuppliers[1]._id },
    { itemName: 'Natural Wooden Hairbrush', description: 'Gentle hairbrush made from natural wood and soft bristles, promoting healthy hair and scalp', stockQuantity: 120, supplier: createdSuppliers[2]._id },
    { itemName: 'Biodegradable Bamboo Cotton Swabs', description: 'Eco-friendly alternative to traditional cotton swabs, made from biodegradable bamboo and cotton, ideal for makeup application and ear cleaning', stockQuantity: 55, supplier: createdSuppliers[3]._id },
    { itemName: 'Organic Cotton Kitchen Towels', description: 'Absorbent kitchen towels made from organic cotton, perfect for drying dishes or wiping countertops', stockQuantity: 130, supplier: createdSuppliers[2]._id },
    { itemName: 'Handcrafted Wooden Picture Frame', description: 'Artisanal picture frame made from reclaimed wood, adding a rustic touch to your photos and artworks', stockQuantity: 75, supplier: createdSuppliers[3]._id },
    { itemName: 'Recycled Plastic Freezer Bags', description: 'Durable freezer bags made from recycled plastic, providing a sustainable solution for storing food in the freezer', stockQuantity: 90, supplier: createdSuppliers[2]._id },
    { itemName: 'Natural Bamboo Bath Mat', description: 'Water-resistant bath mat made from natural bamboo, adding a spa-like feel to your bathroom decor', stockQuantity: 65, supplier: createdSuppliers[1]._id },
    { itemName: 'Reusable Glass Drinking Straws', description: 'Eco-friendly glass drinking straws, durable and dishwasher safe, perfect for enjoying your favorite beverages', stockQuantity: 110, supplier: createdSuppliers[2]._id },
    { itemName: 'Fair Trade Organic Quinoa', description: 'Nutrient-rich quinoa grains sourced from fair trade cooperatives, offering a versatile and sustainable addition to your pantry', stockQuantity: 40, supplier: createdSuppliers[3]._id },
  
  ]    
  
  await Product.insertMany(seedProducts);
  console.log('Database seeded!');
}

seedDB()
