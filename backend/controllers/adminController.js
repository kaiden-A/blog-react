import User from "../models/User.js";
import Blog from "../models/Blog.js";

export const post_blog = async(req , res) => {

    const { title , description } = req.body;
    const id = req.user._id;

    try{
        
        const blog = await Blog.create({author : id , title , description});
        

        if(!blog){
            return res.status(401).json({error : "Unsuccesfully publish the blog"})
        }

        res.json({success : blog})

    }catch(err){
        console.log(err);
    }
}

export const update_blog = async(req , res) => {

    const { title , description } = req.body;
    const id = req.user._id;

    try{

        const saveBlog = await findOneAndUpdate(
            {_id : id},
            {$set : {title  , description}},
            {new : true}
        )

    }catch(err){
        console.log(err);
    }
}

export const delete_blog = async(req , res) => {

    const blogId = req.params.id;

    try{

        const dltBlog = await Blog.findByIdAndDelete(blogId);

        if(!dltBlog){
            res.status(401).json({error : "Unsuccesfully delete the blog"})
        }

        res.json({success : dltBlog});

    }catch(err){
        console.log(err);
    }
}