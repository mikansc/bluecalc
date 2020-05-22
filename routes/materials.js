const express = require('express');
const router = express.Router();
const { asyncErrorHandler, isLoggedIn } = require('../middleware');
const {
  getMaterials,
  getNewMeterMaterial,
  getNewUnityMaterial,
  getNewSquareMaterial,
  getNewWeightMaterial,
  postNewMaterial,
  updateMaterial,
  deleteMaterial
} = require('../controllers/materials');

/* GET /materials (index) */
router.get('/', isLoggedIn, asyncErrorHandler(getMaterials));

// GET Materials pages-----------------------------------------------------
// ========================================================================

/* GET /materials/meter/new (new - meter) */
router.get('/meter/new', isLoggedIn, getNewMeterMaterial);

/* GET /materials/unity/new (new - unity) */
router.get('/unity/new', isLoggedIn, getNewUnityMaterial);

/* GET /materials/square/new (new - square) */
router.get('/square/new', isLoggedIn, getNewSquareMaterial);

/* GET /materials/meter/new (new - weight) */
router.get('/weight/new', isLoggedIn, getNewWeightMaterial);

// ========================================================================

/* POST /materials (create) */
router.post('/', isLoggedIn, asyncErrorHandler(postNewMaterial));

/* PUT /materials/:mat_id (update) */
router.put('/:mat_id', isLoggedIn, asyncErrorHandler(updateMaterial));

/* DELETE /materials/:mat_id (destroy)*/
router.delete('/:mat_id', isLoggedIn, asyncErrorHandler(deleteMaterial));

module.exports = router;
