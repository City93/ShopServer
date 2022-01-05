const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const objectSchema = {
    name: String,
    rating: String,
    price: Number,
    image: String,
    provider: String
};
const productSchema = mongoose.Schema(objectSchema)
productSchema.plugin(mongoosePaginate)
const Product = mongoose.model('Product', productSchema)

module.exports = Product