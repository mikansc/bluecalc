var express = require('express');
var router = express.Router();

/* GET /materials (index) */
router.get('/', function (req, res, next) {
    res.send('GET materials/');
});

/* GET /materials/new (new) */
router.get('/new', function (req, res, next) {
    res.send('GET materials/new');
});

/* POST /materials (create) */
router.post('/', function (req, res, next) {
    res.send('POST materials/');
});

/* PUT /materials/:id (update) */
router.put('/:mat_id', function (req, res, next) {
    res.send('PUT materials/:mat_id');
});

/* DELETE /materials/:id (destroy)*/
router.delete('/:mat_id', function (req, res, next) {
    res.send('DELETE materials/:mat_id');
});


module.exports = router;
