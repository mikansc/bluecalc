const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
    getMaterials,
    getNewMaterial,
    postNewMaterial,
    updateMaterial,
    deleteMaterial
} = require('../controllers/materials');

/* GET /materials (index) */
router.get('/', asyncErrorHandler(getMaterials));

/* GET /materials/new (new) */
router.get('/new', getNewMaterial);

/* POST /materials (create) */
router.post('/', asyncErrorHandler(postNewMaterial));

/* PUT /materials/:mat_id (update) */
router.put('/:mat_id', asyncErrorHandler(updateMaterial));

/* DELETE /materials/:mat_id (destroy)*/
router.delete('/:mat_id', asyncErrorHandler(deleteMaterial));


module.exports = router;
