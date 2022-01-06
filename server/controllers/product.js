const Product = require('../models/product')

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const getAllProducts = async (req, res) =>{
    try{
        if (req.query.name) {
            //http://localhost:3000/search?search=woxter&perPage=5&page=1&name=1
            const {page = 1, perPage = 10, name} = req.query;
            const options = {
                page: parseInt(page, 10),
                limit: parseInt(perPage, 10),
                sort:  {name}
            }
            
            const data = await Product.paginate({}, options);
            res.status(200).json(data)}
            else if (req.query.rating) {
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&rating=1
                const {page = 1, perPage = 10, rating} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                    sort:  {rating}
                }
    
                const data = await Product.paginate({}, options);
                res.status(200).json(data)}

            else if (req.query.price) {
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&price=1
                const {page = 1, perPage = 10, price} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                    sort:  {price}
                }      
                const data = await Product.paginate({}, options);
                res.status(200).json(data)}

            else{
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&name=1
                const {page = 1, perPage = 10} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                }    
                const data = await Product.paginate({}, options);
                res.status(200).json(data)
            }

    } catch (err){
        res.status(400).json({'error':err})
    }
}

const searchProduct = async (req,res) =>{
    try{   
        
        // await Product.updateMany(
        //     { 'price' : { $type: 2 } },
        //     [{ $set: { 'price': { $toDouble: "$price" } } }]
        // )
        if (req.query.name) {
            //http://localhost:3000/search?search=woxter&perPage=5&page=1&name=1
            const {page = 1, perPage = 10, name} = req.query;
            const options = {
                page: parseInt(page, 10),
                limit: parseInt(perPage, 10),
                sort:  {name}
            }
            
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            const data = await Product.paginate({ $or: [{name:regex}, {provider: regex}] }, options);
            res.status(200).json(data)}
            else if (req.query.rating) {
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&rating=1
                const {page = 1, perPage = 10, rating} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                    sort:  {rating}
                }
    
                const regex = new RegExp(escapeRegex(req.query.search), 'gi');
                const data = await Product.paginate({ $or: [{name:regex}, {provider: regex}] }, options);
                res.status(200).json(data)}

            else if (req.query.price) {
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&price=1
                const {page = 1, perPage = 10, price} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                    sort:  {price}
                }      
                const regex = new RegExp(escapeRegex(req.query.search), 'gi');
                const data = await Product.paginate({ $or: [{name:regex}, {provider: regex}] }, options);
                res.status(200).json(data)}

            else{
                //http://localhost:3000/search?search=woxter&perPage=5&page=1&name=1
                const {page = 1, perPage = 10} = req.query;
                const options = {
                    page: parseInt(page, 10),
                    limit: parseInt(perPage, 10),
                }    
                const regex = new RegExp(escapeRegex(req.query.search), 'gi');
                const data = await Product.paginate({ $or: [{name:regex}, {provider: regex}] }, options);
                res.status(200).json(data)
            }

    } catch (error){
        console.error(error.stack)
    }
}

const controllers = {
    getAllProducts,
    searchProduct
}

module.exports = controllers