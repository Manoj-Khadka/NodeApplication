const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../dir/path");

router.get("/", (req, res, next) => {
  // res.sendFile("/views/shop.html");
  // Here / refers to the root  folder on our OS not to the Project folder
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
