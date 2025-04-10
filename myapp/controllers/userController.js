const celulares = require('../db');

const userController = { 
  login: function(req, res) {
    res.render("login");
  },

  register: function(req, res) {
    res.render("register");
  },

  profile: function(req, res) {
    res.render("profile", { 
      usuario: celulares.usuario,        
      productos: celulares.productos,    
      title: "Perfil de " + celulares.usuario.nombre
    });
  }
};

module.exports = userController;