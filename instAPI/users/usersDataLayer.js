import UsersModel from "./UsersModel.js";

class UsersDataLayer {
  async getUsers() {
    const users = await UsersModel.find({});
    return users;
  }
  async addUsers(usersBody) {
    const users = await new UsersModel(usersBody).save();
    return users;
  }

  async updateUsers(id, target) {
    const users = await UsersModel.findByIdAndUpdate(id, target);
    return users;
  }
}
export default UsersDataLayer;
