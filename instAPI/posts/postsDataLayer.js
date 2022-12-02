import PostsModel from "./PostsModel.js";

class PostsDataLayer {
  async getPosts() {
    const posts = await PostsModel.find({});
    return posts;
  }
  async addPosts(postsBody) {
    const posts = await new PostsModel(postsBody).save();
    return posts;
  }

  async updatePosts(id, target) {
    const posts = await PostsModel.findByIdAndUpdate(id, target);
    return posts;
  }
}
export default PostsDataLayer;
