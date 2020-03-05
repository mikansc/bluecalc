const User = require("../models/User");


module.exports = {
    getRegister(req, res, next) {
        res.render('./users/register');
    },

    async postRegister(req, res, next) {
        // error handler for the MongoDB database error
        try {
            const user = await User.register(new User(req.body), req.body.password);
            console.log(user);
            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                req.session.success = `Bem vindo a blueline, ${user.name}!`;
                res.redirect("/");
            });
        } catch (err) {
            const { username, email } = req.body;
            let error = err.message;
            if (
                error.includes("duplicate") &&
                error.includes("index: email_1 dup key")
            ) { error = "A user with the given email is already registered."; }
            res.render("register", {
                title: "Surfshop - Register",
                username,
                email,
                error
            });
        };
    },
    async getProfile(req, res, next) {
        userId = req.params.user_id;
        res.render('./users/profile', { userId });
    },

    getLogin(req, res, next) {
        res.render('./users');
    },

    async postLogin(req, res, next) {
        const { username, password } = req.body;
        const { user, error } = await User.authenticate()(username, password);
        if (!user && error) return next(error);
        req.login(user, err => {
            if (err) return next(err);
            req.session.success = `Bem vindo de volta, ${user.name}!`;
            const redirectUrl = req.session.redirectTo || "/dashboard";
            delete req.session.redirectTo;
            res.redirect(redirectUrl);
        });
    }
};