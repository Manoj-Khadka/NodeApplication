const express = require("express");
const router = express.Router();

router.get("/add", (req, res, next) => {
  console.log(" second middleware");
  res.send(
    '<form action="/product" method = "POST"> <input type="text" name = "Title"> <button type="submit">Add</button></form>',
  );
});

router.post("/product", (req, res, next) => {
  console.log("===>", req.body);
  res.send("Product added");
});

module.exports = router;
