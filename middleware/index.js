module.exports = {
    // Handle asynchronous errors
    asyncErrorHandler: fn => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    },
    // Verify if user is logged in
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) return next();
        req.session.error = "You need to be logged in to do that.";
        req.session.redirectTo = req.originalUrl;
        res.redirect("/");
    }
};
