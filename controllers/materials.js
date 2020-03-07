const Material = require("../models/Material");


module.exports = {
    async getMaterials(req, res, next) {
        Material.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.render('materials/', { data });
        });
    },

    getNewMaterial(req, res, next) {
        res.render('materials/new');
    },

    async postNewMaterial(req, res, next) {
        const data = req.body;
        const size = data.size;
        for (let key in size) {
            if (size[key] === '0') {
                size[key] = '1';
            }
        }
        const material = new Material(data);
        await material.save();
        res.redirect('materials/');
        // res.send('Pagina de post material');
    },
    async updateMaterial(req, res, next) {
        // update instructions
    },
    async deleteMaterial(req, res, next) {
        // delete instructions
    }
};