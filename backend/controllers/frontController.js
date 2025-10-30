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



        res.json({author : user.username , bio : profile.bio ,  blog ,  post , followers , following , id : user._id})

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

export const post_follow = async (req , res) => {

    const currentUserId = req.user._id;
    const authorId = req.params.authorId;


    try{

        const author = await User.findById(authorId);
        const current = await User.findById(currentUserId);

        if(author._id.toString() === current._id.toString()) return res.status(401).json({error : true , msg : "Author Can't follow itself" , type : "validation"})

        if(!current){
            res.status(401).json({cookies : false , error : true , msg : "Current user is not log in"  , type : "auth"})
        }

        if(!author){
            res.status(401).json({error : true , msg : "Author doesn't exist" , type : "user"})
        }
        

        const follower = await Followers.updateOne(
            {author : author._id},
            {$addToSet : {followers : current._id}},
            {new : true}
        )

        const following = await Followers.updateOne(
            {author : current._id},
            {$addToSet : {following : author._id}},
            {new : true}
        )

        res.json({success : true , msg : "successfully follow the author"})

    }catch(err){

        console.log(err);
        res.status(500).json({error : true , msg : err , type : "server"});
    }
}