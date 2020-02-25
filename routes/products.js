var express = require('express');
var router = express.Router();

/* GET /products (index) */
router.get('/', function (req, res, next) {
    res.send('GET products/');
});

/* GET /products/new (new) */
router.get('/new', function (req, res, next) {
    res.send('GET products/new');
});

/* POST /products (create) */
router.post('/', function (req, res, next) {
    res.send('POST products/');
});

/* PUT /products/:prod_id (update) */
router.put('/:prod_id', function (req, res, next) {
    res.send('PUT products/:prod_id');
});

/* DELETE /products/:prod_id (destroy)*/
router.delete('/:prod_id', function (req, res, next) {
    res.send('DELETE products/:prod_id');
});


module.exports = router;
