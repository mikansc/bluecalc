const express = require('express');
const router = express.Router();
const {
  getLandingPage
} = require('../controllers/');
const { asyncErrorHandler } = require('../middleware/');


/* GET Landing page. */
router.get('/', getLandingPage);

/* POST /login */
router.post('/login', function (req, res, next) {
  res.send('POST /login');
});

/* POST /logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

/*GET /register */
router.get('/register', function (req, res, next) {
  res.send('GET /register');
});

/*POST /register */
router.post('/register', function (req, res, next) {
  res.send('POST /register');
});

module.exports = router;
