import User from "../models/User.js"
import Blog from "../models/Blog.js";
import Followers from '../models/Followers.js'
import Profile from "../models/Profile.js";

export const get_homepage = async (req , res) => {

    const users = await User.find();
    const result = await Promise.all( 
        
        users.map(async user => {

        const blogs = await Blog.find({author : user._id , publish : true});
        const follow = await Followers.findOne({author : user._id});


        return{
            name : user.username,
            statistic : {
                post :blogs.length , 
                followers : follow?.followers?.length || 0,
                following: follow?.following?.length || 0
            },

            blogs : blogs.slice(0 , 2)
        }
    }))

    res.json({user : result});
}

export const get_username = async (req , res) => {

    const username = req.params.username;

    try{

        const user = await User.findOne({username : username});

        if(!user){
            res.status(404).json({error : "User not exist"})
        }

        const follow = await Followers.findOne({author : user._id});
        const blog = await Blog.find({author : user._id , publish : true});
        const profile = await Profile.findOne({author : user._id}) || {bio : "No Bio Yet"};
        
        const followers =  follow?.followers?.length || 0;
        const following =  follow?.following?.length || 0;
        const post = blog.length;



        res.json({author : user.username , bio : profile.bio ,  blog ,  post , followers , following})

    }catch(err){
        console.log(err);
    }
}


export const get_individual_blog = async(req , res) => {

    const {username , id} = req.params;

    try{

        const user = await User.findOne({username});
        const blogs = await Blog.findOne({author : user._id , _id : id});

        res.json({blog : blogs , author : user.username});

    }catch(err){
        console.log(err);
    }

}