const db = require('../database/models');    
const bcrypt = require('bcryptjs');           

const userController = {
  register: function(req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/users/profile');
    }

    res.render("register", {
      errorNombre: "",
      errorEmail: "",
      errorPassword: "",
      errorNacimiento: ""
    });
  },


  Register: function(req, res) {
    const { username, email, password, birthdate } = req.body;

    let errorNombre = "";
    let errorEmail = "";
    let errorPassword = "";
    let errorNacimiento = "";
    let hayErrores = false;

  
    if (!username) {
      errorNombre = "El nombre de usuario es obligatorio.";
      hayErrores = true;
    }

    if (!email) {
      errorEmail = "El email es obligatorio.";
      hayErrores = true;
    }

    if (!password || password.length < 3) {
      errorPassword = "La contraseña debe tener al menos 3 caracteres.";
      hayErrores = true;
    }

    if (!birthdate) {
      errorNacimiento = "La fecha de nacimiento es obligatoria.";
      hayErrores = true;
    }

    db.Usuario.findOne({ where: { email: email } })
      .then(function(usuarioExistente) {
        if (usuarioExistente) {
          errorEmail = "Este email ya está registrado.";
          hayErrores = true;
        }

        if (hayErrores) {
          return res.render("register", {
            errorNombre: errorNombre,
            errorEmail: errorEmail,
            errorPassword: errorPassword,
            errorNacimiento: errorNacimiento
          });
        }

        db.Usuario.create({
          nombre_usuario: username,
          email: email,
          contraseña: bcrypt.hashSync(password, 10),
          fecha_nacimiento: birthdate,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(function() {
          res.redirect('/users/login'); 
        })
        .catch(function(error) {
          res.send("Error al guardar el usuario: " + error);
        });
      })
      .catch(function(error) {
        res.send("Error al buscar email: " + error);
      });
  },


  login: function(req, res) {
    res.render("login");
  },

  profile: function(req, res) {
    res.render("profile", { 
      usuario: req.session.user,
      title: "Perfil de " + req.session.user.nombre_usuario
    });
  }
};

module.exports = userController;
