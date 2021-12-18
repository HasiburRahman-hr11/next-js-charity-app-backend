const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    author: { type: String },
    thumbnail: { type: Buffer }
}, { timestamps: true });


const Blog = model('Blog', blogSchema);
module.exports = Blog;