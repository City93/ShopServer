const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Provider = require('./provider')

const objectSchema = {
    id: {type: Number},
    name: {type: String},
    rating: {type: String},
    price: {type: Number},
    image: {type: String},
    provider: {type: String},
    id_provider: {type: mongoose.Schema.ObjectId, ref: "Provider"}
};

const productSchema = mongoose.Schema(objectSchema)

productSchema.plugin(mongoosePaginate)

const Product = mongoose.model('Product', productSchema)

module.exports = Product