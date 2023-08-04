const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Checking if the post belongs to the logged in user
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Checking if the post belongs to the logged in user
    if (post.username === req.body.username) {
      try {
        post.deleteOne();
        res.status(200).json("Post Deleted");
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json("You can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) posts = await Post.find({ username });
    // We are searching for the category name in the categories array using $in
    else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
