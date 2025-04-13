const celulares = require('../db');

const mainController = {
  index: function(req, res) {
    res.render('index', { 
      listado: celulares.productos, 
      title: "Celumarket"
    });
  }
};

module.exports = mainController;