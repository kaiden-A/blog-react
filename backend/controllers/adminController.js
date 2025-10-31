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
        const follow = await Followers.findOne({author : user._id});

        let totalComment = 0;
        blog.forEach((b) => {
            totalComment += blog?.comments?.length || 0;
        })

        res.json({
            author : user.username,
            blog : blog.length ,
            comment : totalComment, 
            followers : follow?.followers?.length || 0 , 
            following : follow?.following?.length || 0
        })

        

    }catch(err){
        console.log(err);
    }

}

export const post_blog = async(req , res) => {

    const { categories , title , description , readTime , publish } = req.body;
    const id = req.user._id;

    try{
        
        const blog = await Blog.create({author : id , categories ,title , description , readTime , publish});
        

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

    const { title , description , readTime , publish} = req.body;
    const id = req.params.id;

    try{

        const saveBlog = await Blog.findOneAndUpdate(
            {_id : id},
            {$set : {title  , description , readTime , publish}},
            {new : true}
        )

        if(!saveBlog){
            return res.status(401).json({error : "unsuccessfully update blogs"})
        }

        return res.json({success : saveBlog});

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

export const manage_blog = async (req , res) => {

    const id = req.user._id;

    try{

        const user = await User.findById(id);
        const blogs = await Blog.find({author : id});
        const publishBlogs = await Blog.find({author : id , publish : true});
        const draftBlogs = await Blog.find({author : id , publish : false});

        res.json({
            blogs , 
            author :  user.username,
            blogsLength : blogs?.length || 0 ,
            publishLength : publishBlogs?.length || 0 , 
            draftLength : draftBlogs?.length || 0
        })

    }catch(err){
        console.log(err);
    }

}


export const get_profile_change = async (req , res) => {

    const id = req.user._id;

    try{

        const user = await User.findById(id);

        if(!user){
            return res.status(401).json({error : "User Doesnt Exist"});
        }

        let newProfile = await Profile.findOne({author : user._id});

        if(!newProfile){
            newProfile = await Profile.create({ author : user._id , fullName : "" , bio : ""});

        }

        res.json({
            fullName : newProfile?.fullName || "" ,
            bio : newProfile?.bio || "No Bio Yet",
            author : user.username,
            email : user.email
        });

    }catch(err){
        console.log(err);
    }
}

export const update_profiles = async (req , res) => {

    const id = req.user.id;
    const {fullName , bio} = req.body;

    try{

        const user = await User.findById(id);

        if(!user){
            return res.status(401).json({error : "USER DOESNT EXIST"});
        }

        const profile = await Profile.findOneAndUpdate(
            {author : user._id},
            {$set : {fullName , bio}},
            {new : true}
        )

        if(!profile){
            return res.status(401).json({error : "UNSUCCESFULLY UPDATE THE DATA"});
        }

        res.json({success : profile});


    }catch(err){

        console.log(err);
    }
}

export const update_password = async (req , res) => {

    const id = req.user.id;
    const {password , newPassword} = req.body;

    try{

        const user = await User.findById(id);

        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({error :true , msg : "WRONG PASSWORD" , type : "password"})
        }

        //update password
        user.password = newPassword;
        await user.save();


        res.json({success : true , msg : user})

    }catch(err){
        console.log(err);
    }
}


export const get_followers = async (req , res) => {

    const id = req.user._id;

    try{

        const user = await User.findById(id);
        const authorFollow = await Followers.findOne({author : user._id});

        const followerArray = await Promise.all(
            authorFollow.followers.map(async follow => {
                const follower = await User.findById(follow);
                const profile = await Profile.findOne({author : follower._id});
                const blog = await Blog.find({author : follower._id , publish : true});
                const followUser = await Followers.findOne({author : follower._id});
                return {
                    username : follower.username,
                    bio : profile?.bio || "No Bio Yet",
                    totalBlog : blog?.length || 0,
                    totalFollowers : followUser?.followers?.length || 0
                }
            })
        )

        const followingArray = await Promise.all(

            authorFollow.following.map(async follow => {
                const follower = await User.findById(follow);
                const profile = await Profile.findOne({author : follower._id});
                const blog = await Blog.find({author : follower._id , publish : true});
                const followUser = await Followers.findOne({author : follower._id});
                return {
                    username : follower?.username || null,
                    bio : profile?.bio || "No Bio yet",
                    totalBlog : blog?.length || 0,
                    totalFollowers : followUser?.followers?.length || 0
                }
            })
        )


        res.json({
            totalFollower : authorFollow?.followers?.length || 0,
            totalFollowing : authorFollow?.following?.length || 0,
            followers : followerArray || [],
            following : followingArray || []
        })

    }catch(err){
        console.log(err);

        res.json({error : true , msg : err , type: 'server'});
    }
}