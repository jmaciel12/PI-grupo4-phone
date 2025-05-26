const db = require("../database/models");
const Producto = db.Producto;
const Comentario = db.Comentario;

let relacion = {
  include: [
    {
      association: "comentarios",
    },
    {
      association: "usuario",
    },
  ]
}

const productController = {
  add: function (req, res) {
    res.render("addProduct");
  },

  detail: function (req, res) {
    let idProducto = req.params.id;
    Producto.findByPk(idProducto, relacion)
      .then(function (producto) {
        if (producto == null) {
          res.redirect("/");
        }
        res.render("product", {
          producto: producto,
          comentarios: producto.comentarios
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  search: function(req, res) {
    res.render('searchResults', { 
      listado: celulares.productos, 
      
    });
  }
};

module.exports = productController;
