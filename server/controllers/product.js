const Product = require('../models/product')



const getAllProducts = async (req, res) =>{
    try{
        const data = await Product.find({})
        res.status(200).json(data)
    } catch (err){
        res.status(400).json({'error':err})
    }
}

const searchProduct = async (req,res) =>{
    try{        
        if (req.query.search) {
            function escapeRegex(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            };
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const data = await Product.find({ $or: [{name:regex}, {provider: regex}] });
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