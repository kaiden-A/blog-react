import mongoose from "mongoose";


const preferenceSchema = mongoose.Schema({
  background: {
    type: String,
    default: "#FFFFFF", // white background
  },
  headers: {
    type: String,
    default: "#1E1E1E", // dark gray for text headers
  },
  blog: {
    type: String,
    default: "#F5F5F5", // soft gray for content areas or blog section
  },
});


const Preference = mongoose.model('preference' , preferenceSchema);
export default Preference;