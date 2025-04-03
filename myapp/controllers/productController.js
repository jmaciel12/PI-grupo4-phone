const productController = {
  add: function(req, res) {
      res.render("addProduct");
  },

  detail: function(req, res) {
      const productData = {
          name: "Producto de Ejemplo",
          description: "Descripción del producto",
          image: "/img/product.jpg"
      };
      res.render("product", { product: productData });
  },

  search: function(req, res) {
      res.render("searchResults");
  }
};

module.exports = productController;
