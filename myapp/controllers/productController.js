const celulares = require("../db");

const productController = {
  add: function (req, res) {
    res.render("addProduct", { usuario: celulares.usuario });
  },

  detail: function (req, res) {
    const productoEjemplo = celulares.productos[0];

    res.render("product", {
      producto: productoEjemplo,
      comentarios: productoEjemplo.comentarios,
    });
  },
  search: function(req, res) {
    res.render('searchResults', { 
      listado: celulares.productos, 
      
    });
  }
  
};


module.exports = productController;
