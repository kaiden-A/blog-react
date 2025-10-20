import User from "../models/User.js";
import Blog from "../models/Blog.js";
import Profile from "../models/Profile.js";
import Followers from '../models/Followers.js';


export const get_admin = async(req , res) => {

    res.json({success : true , cookies : true})
}

export const get_profile = async(req , res) => {

    const id = req.user.id;

    try{

        const user = await User.findById(id);

        if(!user){
            return res.json({error : "User doesnt find"})
        }

        const blog = await Blog.find({author : user._id})
        const follow = await Blog.findOne({author : user._id}) || {followers : [] , following : []};

        let totalComment = 0;
        blog.forEach((b) => {
            totalComment += blog?.comments?.length || 0;
        })

        res.json({
            author : user.username,
            blog : blog.length ,
            comment : totalComment, 
            followers : follow?.followers?.length || 0 , 
            following : follow?.following?.length ||0
        })

        

    }catch(err){
        console.log(err);
    }

}

export const post_blog = async(req , res) => {

    const { categories , title , description , readTime } = req.body;
    const id = req.user._id;

    try{
        
        const blog = await Blog.create({author : id , categories ,title , description , readTime});
        

        if(!blog){
            return res.status(401).json({error : "Unsuccesfully publish the blog"})
        }

        res.json({success : blog})

    }catch(err){
        console.log(err);
    }
}

export const post_profile = async(req , res) => {

    const {fullName , bio} = req.body;

    const id = req.user._id;

    try{

        const profile = await Profile.create({author : id , fullName , bio});

        if(!profile){
            return res.status(401).json({error : "UNSUCCESFULLY CREATE PROFILE"})
        }

        res.json({success : profile});

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