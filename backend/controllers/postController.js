const asyncHandler = require('express-async-handler');
const Post = require("../models/postModel")

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user._id })
    res.json(posts)
})

const createPost = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body

    if (!title || !content || !category) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const post = new Post({ user: req.user._id, title, content, category })

        const publishedPost = await post.save()

        res.status(201).json(publishedPost)
    }
}
)

const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        res.json(post)
    } else {
        res.status(400).json({ message: "Post not found" })
    }
})

const updatePost = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body

    const post = await Post.findById(req.params.id)

    if (post.user.toString() !== req.user._id.toString()) {
        res.status(401)
        throw new Error("You are not allowed to perform this action")
    }

    if (post) {
        post.title = title
        post.content = content
        post.category = category

        const updatedPost = await post.save()
        res.json(updatedPost)
    } else {
        res.status(404)
        throw new Error("Post not found")
    }
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post.user.toString() !== req.user._id.toString()) {
        res.status(401)
        throw new Error("You are not allowed to perform this action")
    }

    if (post) {
        await post.remove()
        res.json({ message: "Post Removed" })
    } else {
        res.status(404)
        throw new Error("Post not found")
    }
})

module.exports = { getPosts, createPost, getPostById, updatePost, deletePost }