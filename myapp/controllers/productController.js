const db = require("../database/models");
const Producto = db.Producto;
const Comentario = db.Comentario;
const op = db.Sequelize.Op;

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
    let busqueda = req.query.search;

    Producto.findAll({
      include: [
        {
          association: "comentarios",
        },
        {
          association: "usuario",
        }
      ],
      where: {
        nombre: {
          [op.like]: `%${busqueda}%`
        }
      }
    }).then(function(resultados) {
      res.render("searchResults", {
        listado: resultados
      });
    });
  }
};

module.exports = productController;
