const postModel = require("../models/postModel");

const postController = {
  getPost: async (req, res) => {
    // res.send("get post");
    //add new doc to database

    const post = new postModel({
      title: "test",
      content: "test",
    });
    post.save();
    try {
      const posts = await postModel.find();
      console.log(posts);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: err });
    }
  },
  createPost: async (req, res) => {
    // res.send("create post");

    try {
      //nhan du lieu tu phia client
      const newPost = req.body;

      //update du lieu len database
      const post = new postModel(newPost);
      await post.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: err });
    }
  },
  updatePost: async (req, res) => {
    // res.send("create post");

    try {
      //nhan du lieu tu phia client
      const updatePost = req.body;

      //update du lieu len database
      const post = await postModel.findByIdAndUpdate(
        { _id: updatePost._id },
        updatePost,
        { new: true }
      );
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: err });
    }
  },
};
module.exports = postController;
