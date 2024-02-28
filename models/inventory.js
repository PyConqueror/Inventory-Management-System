const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    itemName: {
        type: String,
        required: true
      },
      description: String,
      stockQuantity: {
        type: Number,
        required: true
      },
      supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: false
      },
})

module.exports = mongoose.model('Product', productSchema);