const express = require("express");
const { body } = require("express-validator");
const feedController = require("../Controllers/feed");
const router = express.Router();

// GET
router.get("/posts", feedController.getPosts);

// POST
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost,
);

module.exports = router;
