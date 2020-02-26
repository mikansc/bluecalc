const User = require('../models/User');

module.exports = {
    // GET página inicial (landing)
    getLandingPage(req, res, next) {
        res.render('index');
    },
    // // POST executa login
    // async postLogin(req, res, next) {
    //     const { username, password } = req.body;
    //     const { user, error } = await User.authenticate()(username, password);
    //     if (!user && error) return next(error);
    //     req.login(user, err => {
    //         if (err) return next(err);
    //         // req.session.success = `Welcome back, ${username}!`;
    //         const redirectUrl = req.session.redirectTo || "/";
    //         delete req.session.redirectTo;
    //         res.redirect(redirectUrl);
    //     });
    // },
    // GET página de cadastro
    // getRegister(req, res, next) {

    // },
    //POST executa cadastro
    // async postRegister(req, res, next) {

    // }

};