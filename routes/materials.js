const express = require('express');
const router = express.Router();
const { asyncErrorHandler, isLoggedIn } = require('../middleware');
const {
    getMaterials,
    getNewMaterial,
    postNewMaterial,
    updateMaterial,
    deleteMaterial
} = require('../controllers/materials');

/* GET /materials (index) */
router.get('/', isLoggedIn, asyncErrorHandler(getMaterials));

/* GET /materials/new (new) */
router.get('/new', isLoggedIn, getNewMaterial);

/* POST /materials (create) */
router.post('/', isLoggedIn, asyncErrorHandler(postNewMaterial));

/* PUT /materials/:mat_id (update) */
router.put('/:mat_id', isLoggedIn, asyncErrorHandler(updateMaterial));

/* DELETE /materials/:mat_id (destroy)*/
router.delete('/:mat_id', isLoggedIn, asyncErrorHandler(deleteMaterial));


module.exports = router;
