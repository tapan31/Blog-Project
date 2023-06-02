const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = express()

// Getting blog routes
const blogRoutes = require("./routes/blogs.js")

// Middleware to print the request path and method in console
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Middleware to parse incoming request bodies as JSON
app.use(express.json())

// Routes
app.use("/api/blogs", blogRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and listening on port", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
