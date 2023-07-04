import mongoose from "mongoose";

const postSchema = mongoose.Schema({
 userId:{
    type:String,
    required:true,
 },
 firstName:{
    type:String,
    required:true,
 },
 lastName:{
    type:String,
    required:true,
 },
 location:String,
 picturePath:String,
 description:String,
 userPicturePath:String,
 likes:{
    type:Map,
    of:Boolean,
 },
 comments:{
  type:Array,
  default:[]
 },
 createdAt: {
    type: Date,
    default: Date.now(),
  },
})


const Post  = mongoose.model('Post', postSchema);

export default Post;