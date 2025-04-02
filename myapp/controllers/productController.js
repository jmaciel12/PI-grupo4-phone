const productController = {
    add: (req, res) => {
      res.render("addProduct");
    },
  
    detail: (req, res) => {
      const productData = {
        name: "Producto de Ejemplo",
        description: "Descripción del producto",
        image: "/img/product.jpg",
      };
      res.render("productDetail", { product: productData });
    },
  
    search: (req, res) => {
      res.render("searchResults");
    },
  };
  
  module.exports = productController;