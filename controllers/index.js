const User = require('../models/User');
const Product = require('../models/Product');
const Material = require('../models/Material');

module.exports = {
    // GET página inicial (landing)
    getLandingPage(req, res, next) {
        res.render('index');
    },

    // GET página inicial logado (dashboard)
    getDashboard(req, res, next) {
        res.render('dashboard');
    }

};