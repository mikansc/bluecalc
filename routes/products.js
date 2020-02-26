const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
    getProducts,
    getNewProduct,
    postNewProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

/* GET /products (index) */
router.get('/', asyncErrorHandler(getProducts));

/* GET /products/new (new) */
router.get('/new', getNewProduct);

/* POST /products (create) */
router.post('/', asyncErrorHandler(postNewProduct));

/* PUT /products/:prod_id (update) */
router.put('/:prod_id', asyncErrorHandler(updateProduct));

/* DELETE /products/:prod_id (destroy)*/
router.delete('/:prod_id', asyncErrorHandler(deleteProduct));


module.exports = router;
