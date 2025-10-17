import mongoose from "mongoose";


const followerSchema = mongoose.Schema({

    author :{
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'    
    },

    following : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : 'User'    
        }
    ],

    followers : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : 'User'               
        }
    ]
})

const Follower = mongoose.model('follower' , followerSchema);

export default Follower;