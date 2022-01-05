const mongoose = require('mongoose')

const objectSchema = {
    name: String,
    rating: String,
    price: Number,
    image: String,
    provider: String
};
const productSchema = mongoose.Schema(objectSchema)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;