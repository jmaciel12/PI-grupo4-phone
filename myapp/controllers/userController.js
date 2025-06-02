const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userController = {
  register: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect("/user/profile");
    }

    res.render("register", {
      errorNombre: "",
      errorEmail: "",
      errorPassword: "",
      errorNacimiento: "",
    });
  },

  Register: function (req, res) {
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
      .then(function (usuarioExistente) {
        if (usuarioExistente) {
          errorEmail = "Este email ya está registrado.";
          hayErrores = true;
        }

        if (hayErrores) {
          return res.render("register", {
            errorNombre: errorNombre,
            errorEmail: errorEmail,
            errorPassword: errorPassword,
            errorNacimiento: errorNacimiento,
          });
        }

        db.Usuario.create({
          nombre_usuario: username,
          email: email,
          contraseña: bcrypt.hashSync(password, 10),
          fecha_nacimiento: birthdate,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
          .then(function () {
            res.redirect("/user/login");
          })
          .catch(function (error) {
            res.send("Error al guardar el usuario: " + error);
          });
      })
      .catch(function (error) {
        res.send("Error al buscar email: " + error);
      });
  },

  login: function(req, res) {
    if (req.session.user) {
        return res.redirect('/user/profile');
    }
    res.render("login", {
        errorLogin: null
    });


},
  profile: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/user/login");
    }

    res.render("profile", {
      usuario: req.session.user,
      productos: [],
      title: "Perfil de " + req.session.user.nombre_usuario,
    });
  },

  processLogin: function (req, res) {
    const { email, password, recordame } = req.body;

    db.Usuario.findOne({ where: { email: email } })
      .then(function (usuario) {
        if (!usuario) {
          return res.render("login", {
            errorLogin: "Email o contraseña incorrectos",
          });
        }

        const contraseñaOk = bcrypt.compareSync(password, usuario.contraseña);
        if (!contraseñaOk) {
          return res.render("login", {
            errorLogin: "Email o contraseña incorrectos",
          });
        }

        req.session.user = usuario;
        if (recordame) {
          res.cookie("recordame", usuario.id, { maxAge: 1000 * 60 * 30 });
        }
        return res.redirect("/user/profile");
      })
      .catch(function (error) {
        return res.send("error");
      });
  },
  logout: function (req, res) {
    res.clearCookie("recordame");
    req.session.destroy(function (err) {
      if (err) {
        return res.send("Error al cerrar sesión");
      }
      res.redirect("/");
    });
  },

  viewProfileById: function (req, res) {
    const idUsuario = req.params.id;

    db.Usuario.findByPk(idUsuario, {
      include: [
        { association: "productos" }, 
        { association: "comentarios" }, 
      ],
    })
      .then(function (usuarioEncontrado) {
        if (!usuarioEncontrado) {
          return res.redirect("/");
        }
        return res.render("profile", {
          usuario: usuarioEncontrado,
          productos: usuarioEncontrado.productos || [],
          title: "Perfil de " + usuarioEncontrado.nombre_usuario,
        });
      })
      .catch(function (error) {
        console.log("Error al buscar usuario por ID:", error);
        return res.send("Hubo un error al cargar el perfil");
      });
  },
  
};

module.exports = userController;
