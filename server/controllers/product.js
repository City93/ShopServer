const Product = require('../models/product')

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const getAllProducts = async (req, res) =>{
    try{
        const {page = 1, perPage = 10, sort = {price:0,name:0}} = req.query;
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(perPage, 10),
            sort: sort
        }
        const data = await Product.paginate({},options)
        res.status(200).json(data)
    } catch (err){
        res.status(400).json({'error':err})
    }
}

const searchProduct = async (req,res) =>{
    try{        
        if (req.query.search) {
            const {page = 1, perPage = 10, sort = {price:0,name:0}} = req.query;

            const options = {
                page: parseInt(page, 10),
                limit: parseInt(perPage, 10),
                sort: sort
            }

            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const data = await Product.paginate({ $or: [{name:regex}, {provider: regex}] }, options);
            res.status(200).json(data)}

    } catch (err){
        res.status(400).json({'error':err})
    }
}

const controllers = {
    getAllProducts,
    searchProduct
}

module.exports = controllers