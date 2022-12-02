import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  id: Number,
  name: String,
  nickName: String,
  url: String,
  subscribers: Array,
  info: String,
  isAuth: Boolean,
  isFollower: Boolean,
});
const UsersModel = mongoose.model('users', usersSchema);
export default UsersModel;
