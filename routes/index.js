var express = require('express');
var router = express.Router();

/* GET Landing page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Calculadora Blue Line' });
});

/* POST /login */
router.post('/login', function (req, res, next) {
  res.send('POST /login');
});

/*GET /register */
router.get('/register', function (req, res, next) {
  res.send('GET /register');
});

/*POST /register */
router.post('/register', function (req, res, next) {
  res.send('POST /register');
});

// /* GET home/landing  page. */
// router.get("/", asyncErrorHandler(landingPage));

// /* GET /register */
// router.get("/register", getRegister);

// /* POST /register */
// router.post("/register", upload.single('image'), asyncErrorHandler(postRegister));

// /* GET /login */
// router.get("/login", getLogin);

// /* POST /login */
// router.post("/login", asyncErrorHandler(postLogin));

// /* GET /logout */
// router.get("/logout", getLogout);




module.exports = router;
