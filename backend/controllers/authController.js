import User from '../models/User.js';
import Follower from '../models/Followers.js';
import jwt from 'jsonwebtoken';


const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id} ,process.env.JWT_SECRET , {expiresIn : maxAge} )
}

export const post_login = async (req , res) => {

    const {email , password} = req.body;

    try{

        const isHave = await User.findOne({email});

        if(!isHave){
            return res.status(401).json({error : "Invalid Email" , type : 'email'})
        }

        const isMatch = await isHave.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({error : "Incorrect Password" , type : 'password'})
        }

        const token = createToken(isHave._id);

        res.cookie('jwt' , token , {httpOnly : true , maxAge : maxAge * 1000 , secure : false , sameSite: "lax"});
        res.json({success : isHave});


    }catch(err){
        console.log(err);
    }

}

export const post_signup = async (req , res) => {

    const {email , username , password} = req.body;

    try{

        const isHave = await User.findOne({email : email});

        if(isHave){
            return res.status(401).json({error : "Email is Already Taken"})
        }

        if(password.length <= 6){
            return res.status(401).json({error : "Password must be more than 6 character"})
        }

        const createUser = await User.create({email , username , password});
        const createFollow = await Follower.create({author : createUser._id});

        const token = createToken(createUser._id);

        res.cookie('jwt' , token , {httpOnly : true , maxAge : maxAge * 1000 , secure : false , sameSite: "lax"});
        res.json({success : createUser});


    }catch(err){

        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({ error: messages[0] });
        }

        res.status(500).json({error : 'Server Error'});

    }
}