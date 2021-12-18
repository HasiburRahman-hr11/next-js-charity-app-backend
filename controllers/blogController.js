const Blog = require('../models/Blog');

// Add new Blog
exports.addNewBlog = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const author = req.body.author;
    const blogData = {
        title,
        description,
        author
    }

    if (req.files.thumbnail) {
        const thumbnailData = req.files.thumbnail.data;
        const encodedThumbnail = thumbnailData.toString('base64');
        const thumbnail = Buffer.from(encodedThumbnail, 'base64');

        blogData.thumbnail = thumbnail
    }

    try {
        const newBlog = new Blog(blogData);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get All Blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Get Single Blog
exports.getSingleBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const isBlog = await Blog.findById(id);
        if (isBlog) {
            res.status(200).json(isBlog);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Update Blog
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const title = req.body.title;
    const description = req.body.description;
    const author = req.body.author;
    const blogData = {
        title,
        description,
        author
    }

    if (req?.files?.thumbnail) {
        const thumbnailData = req.files.thumbnail.data;
        const encodedThumbnail = thumbnailData.toString('base64');
        const thumbnail = Buffer.from(encodedThumbnail, 'base64');

        blogData.thumbnail = thumbnail
    }
    try {
        const isBlog = await Blog.findById(id);
        if (isBlog) {
            const updatedBlog = await Blog.findByIdAndUpdate(id, blogData, { new: true });
            res.status(200).json(updatedBlog);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Update Blog
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const isBlog = await Blog.findById(id);
        if (isBlog) {
            await Blog.findByIdAndDelete(id);
            res.status(200).json(isBlog);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}