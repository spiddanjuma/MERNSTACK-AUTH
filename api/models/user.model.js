import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique : true,
  },
  email: {
    type: String,
    required: true,
    unique : true,
  },
  password: {
    type: String,
    required: true,
    
  },
  profilePicture: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw1K5Si9DVmlweE3-wHw6pZD&ust=1717013981304000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjXo5-WsYYDFQAAAAAdAAAAABAJ",
  }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;