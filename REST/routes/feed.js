const express = require("express");

const feedController = require("../Controllers/feed");
const router = express.Router();

// GET
router.get("/posts", feedController.getPosts);

// POST
router.post("/post", feedController.createPost);

module.exports = router;
