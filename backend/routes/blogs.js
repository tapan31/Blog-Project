const express = require("express")
const router = express.Router()

const {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController")

// GET all blogs
router.get("/", getAllBlogs)

// GET a single blog
router.get("/:id", getBlog)

// POST a new blog
router.post("/", createBlog)

// Update a blog
router.patch("/:id", updateBlog)

// DELETE a blog
router.delete("/:id", deleteBlog)

module.exports = router
