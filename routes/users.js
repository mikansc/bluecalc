const express = require('express');
const router = express.Router();

/* GET users register page. */
router.get('/register', function (req, res, next) {
  res.render('./users/register');
});

router.get('/profile/:user_id', function (req, res, next) {
  userId = req.params.user_id;
  res.render('./users/profile', { userId });
});

module.exports = router;
