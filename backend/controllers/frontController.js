import User from "../models/User.js"
import Blog from "../models/Blog.js";

export const get_username = async (req , res) => {

    const username = req.params.username;

    try{

        const user = await User.findOne({username : username});

        if(!user){
            res.status(404).json({error : "User not exist"})
        }

        const blog = await Blog.find({author : user._id});

        res.json({blog})

    }catch(err){
        console.log(err);
    }
}