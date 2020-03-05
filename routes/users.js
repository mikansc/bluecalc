const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
  getRegister,
  postRegister,
  getProfile,
  updateProfile
} = require('../controllers/users');

/* GET users register page. */
router.get('/register', getRegister);

/* POST users register page. */
router.post('/register', asyncErrorHandler(postRegister));

/* GET users profile page. */
router.get('/profile/:user_id', function (req, res, next) {
  userId = req.params.user_id;
  res.render('./users/profile', { userId });
});

/* POST /login */
router.post('/login', function (req, res, next) {
  res.send('POST /login');
});

/* POST /logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
