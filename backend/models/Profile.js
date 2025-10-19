import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({

    author : {
        type : mongoose.Schema.Types.ObjectId , ref : 'User'
    },

    fullName : {
        type : String
    },

    bio : {
        type : String
    }
})

const Profile = mongoose.model('profile' , profileSchema);
export default Profile;