const path = require("path");
const rootDir = require("../dir/path");
const Product = require("../Models/product");
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  console.log(product);
  product.save();
  res.redirect("/admin/add-product");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
