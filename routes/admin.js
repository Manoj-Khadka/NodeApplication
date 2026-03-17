const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../dir/path");
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("===>", req.body);
  res.send("Product added");
});

module.exports = router;
