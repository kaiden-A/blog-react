import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const requireAuth = async (req , res , next) => {

    const token = req.cookies.jwt;

    try{

        const decodedToken = jwt.verify(token , process.env.JWT_SECRET);

        const user = await User.findById(decodedToken.id);

        req.user = user;
        next();

    }catch(err){
        res.status(401).json({error : "Doesnt have any cookies" , cookies : false});
    }
}