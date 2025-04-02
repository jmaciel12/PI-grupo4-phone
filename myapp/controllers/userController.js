const userController = {
    login: (req, res) => {
      res.render("login");
    },
  
    register: (req, res) => {
      res.render("register");
    },
  
    profile: (req, res) => {
      const userData = {
        username: "UsuarioDemo",
        email: "usuario@ejemplo.com",
        profilePicture: "/img/profile.jpg",
      };
      res.render("profile", { user: userData });
    },
  };
  
  module.exports = userController;