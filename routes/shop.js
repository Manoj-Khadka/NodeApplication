const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("===>", req.body);
  res.send("Hello from express");
});

module.exports = router;
