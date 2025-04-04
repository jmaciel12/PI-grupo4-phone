const userController = { 
  login: function(req, res) {
      res.render("login");
  },

  register: function(req, res) {
      res.render("register");
  },

  profile: function(req, res) {
      const userData = {
          username: "UsuarioDemo",
          email: "usuario@ejemplo.com",
          profilePicture: "/img/profile.jpg"
      };
      res.render("profile", { user: userData });
  }
};

module.exports = userController;
