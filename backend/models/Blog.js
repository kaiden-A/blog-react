import mongoose from "mongoose";


const commentSchema = mongoose.Schema({

    author: {
        type: String,
        required: false
    },

    text: {
        type: String,
        required: true
    }
}, {timestamps: true});

const blogSchema = mongoose.Schema({

    author : {
        type : mongoose.Schema.Types.ObjectId , ref : 'User'
    },

    categories : {
        type: String,
        required : true
    },

    title:{
        type:String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    readTime : {
        type : Number,
        required: false
    },

    comments: [commentSchema],

},{timestamps: true});

const Blog = mongoose.model('blog' , blogSchema);

export default Blog;