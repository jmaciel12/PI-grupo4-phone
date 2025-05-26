const db = require("../database/models");
const Producto = db.Producto;

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
const mainController = {
  index: function (req, res) {
    Producto.findAll(relacion)
      .then(function (resultados) {
        return res.render("index", {
          title: "Inicio",          
          listado: resultados 
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

module.exports = mainController;
