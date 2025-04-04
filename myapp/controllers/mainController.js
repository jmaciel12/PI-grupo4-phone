const mainController = {
  index: function (req, res) {
      res.render("index", { title: "Mercado Libre" });
  }
};

module.exports = mainController;
