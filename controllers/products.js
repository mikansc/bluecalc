const Product = require("../models/Product");


module.exports = {
    async getProducts(req, res, next) {
        res.render('products/');
    },
    getNewProduct(req, res, next) {
        res.render('products/new');
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