import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  
      id: Number,
      url: String,
      hasBackground: Boolean,
      comments: Array,
      likes: Number,
      userIndex: Number
   });
const PostsModel = mongoose.model('posts', postsSchema);
export default PostsModel;

