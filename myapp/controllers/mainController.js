const mainController = {
    index: (req, res) => {
      res.render("index", { title: "Mercado Libre" });
    },
  };
  
  module.exports = mainController;