const Blog = require("../models/blogModel")
const mongoose = require("mongoose")

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    // Getting all blogs and sorting them in descending order
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.json(blogs)
  } catch (error) {
    res.json({ error: error.message })
  }
}

// Get a single blog
const getBlog = async (req, res) => {
  // Get the blog id from parameters
  const { id } = req.params

  // checking if the id is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" })
  }

  try {
    const blog = await Blog.findById(id)
    res.json(blog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, author } = req.body

  try {
    const blog = await Blog.create({ title, content, author })
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params
  const { title, content, author } = req.body

  // checking if the id is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" })
  }

  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    )
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params
  // checking if the id is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" })
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id)
    if (!deletedBlog) {
      return res.status(404).json({ error: "Workout not found" })
    }
    res.status(200).json(deletedBlog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
}
