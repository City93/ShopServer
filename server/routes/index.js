let express = require('express');
const { getAllProducts, searchProduct } = require('../controllers/product');
var router = express.Router();

/* GET home page. */
router.get('/', getAllProducts);
router.get('/search', searchProduct)

module.exports = router;
