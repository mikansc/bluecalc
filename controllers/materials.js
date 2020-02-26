const Materials = require("../models/Material");


module.exports = {
    async getMaterials(req, res, next) {
        res.render('materials/');
    },
    getNewMaterial(req, res, next) {
        res.render('materials/new');
    },
    async postNewMaterial(req, res, next) {
        // post instructions
    },
    async updateMaterial(req, res, next) {
        // update instructions
    },
    async deleteMaterial(req, res, next) {
        // delete instructions
    }
};