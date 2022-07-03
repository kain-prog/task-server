const express = require('express');
const cool = require('cool-ascii-faces');
const { createPost, getAllPosts, getTaskId,updatePosts, deletePost } = require('../service/postService');

const router = express.Router();

router.get('/cool', (req, res) => res.send(cool()));

router.post('/newPost', createPost);

router.get('/posts', getAllPosts);

router.get('/task/:id', getTaskId);

router.put('/posts/:id', updatePosts);

router.delete('/posts/:id', deletePost);

module.exports = router ;