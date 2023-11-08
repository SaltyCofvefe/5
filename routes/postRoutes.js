const express = require('express');
const postControllers = require('../controllers/postControllers')
const router = express.Router();

// @route PUT - /posts/:id
// @route DELETE - /posts/:id
router.route("/:id")
    .get(postControllers.getPostById)
    .put(postControllers.updatePost)
    .delete(postControllers.deletePost);

// @route GET - /posts/:id
router.route("/:id").get(postControllers.getPostById);
router.route("/").post(postControllers.createNewPosts);


module.exports = router;