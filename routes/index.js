const express = require('express');
const router = express.Router();
const {
  getLandingPage,
  getDashboard
} = require('../controllers/');
const {
  asyncErrorHandler,
  isLoggedIn
} = require('../middleware/');


/* GET Landing page. */
router.get('/', getLandingPage);

/*GET /dashboard */
router.get('/dashboard', isLoggedIn, asyncErrorHandler(getDashboard));

module.exports = router;
