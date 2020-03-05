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
    async postNewProduct(req, res, next) {
        // post instructions
    },
    async updateProduct(req, res, next) {
        // update instructions
    },
    async deleteProduct(req, res, next) {
        // delete instructions
    }
};