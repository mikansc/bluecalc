const Material = require('../models/Material');
// const { } = require("../middleware");

module.exports = {
  async getMaterials(req, res, next) {
    Material.find({}, (err, data) => {
      if (err) throw err;
      res.render('materials/', { data });
    });
  },

  getNewMaterial(req, res, next) {
    res.render('materials/new');
  },
  getNewMeterMaterial(req, res, next) {
    res.render('materials/newMeter');
  },
  getNewUnityMaterial(req, res, next) {
    res.render('materials/newUnity');
  },
  getNewSquareMaterial(req, res, next) {
    res.render('materials/newSquare');
  },
  getNewWeightMaterial(req, res, next) {
    res.render('materials/newWeight');
  },

  async postNewMaterial(req, res, next) {
    const data = req.body;
    // console.log('Dados vindos do formulário sem tratamento:');
    // console.log(data);
    if (!data.size) {
      data.size = {};
    }
    const { width = '1', weight = '1', lenght = '1' } = data.size;
    data.size = {
      width: width || '1',
      weight,
      lenght
    };
    // console.log('Dados com tratamento:');
    // console.log(data);
    const buyUnit = +parseFloat(data.price / (lenght * width * weight)).toFixed(
      10
    );
    data.unityPrice = buyUnit;
    // console.log('Dados com tratamento e unityPrice:');
    // console.log(data);
    const material = new Material(data);
    await material.save();
    res.redirect('materials/');
  },
  async updateMaterial(req, res, next) {
    // update instructions
  },
  async deleteMaterial(req, res, next) {
    // delete instructions
    await Material.findByIdAndDelete(req.params.mat_id);
    res.redirect('materials/');
  }
};
