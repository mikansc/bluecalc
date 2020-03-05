const express = require('express');
const router = express.Router();
const {
  asyncErrorHandler,
  isLoggedIn
} = require('../middleware');
const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getProfile,
  updateProfile
} = require('../controllers/users');

/* GET users register page. */
router.get('/register', getRegister);

/* POST users register page. */
router.post('/register', asyncErrorHandler(postRegister));

/* GET users profile page. */
router.get('/profile/:user_id', isLoggedIn, asyncErrorHandler(getProfile));

/* POST /login */
router.get('/login', getLogin);

/* POST /login */
router.post('/login', asyncErrorHandler(postLogin));

/* POST /logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
