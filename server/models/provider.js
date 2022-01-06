const mongoose = require('mongoose')

const objectSchema = {
    id: Number,
    name: String,
    CIF: String,
    address: String
};

const providerSchema = mongoose.Schema(objectSchema)
const Provider = mongoose.model('Provider', providerSchema)

module.exports = Provider