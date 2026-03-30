const path = require("path");
const rootDir = require("../dir/path");
const products = [];
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/admin/add-product");
};

exports.getProducts = (req, res, next) => {
  console.log("----", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
