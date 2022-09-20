const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/', postController.getPost);

router.post('/', postController.createPost);

router.post('/', postController.updatePost);

 module.exports = router;