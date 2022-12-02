import UsersDataLayer from "./usersDataLayer.js";

const dataLayer = new UsersDataLayer();

export const getUsers = async (req, res) => {
  try {
    const data = await dataLayer.getUsers();
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};
export const addUsers = async (req, res) => {
  try {
    const data = await dataLayer.addUsers(req.body);
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};
export const updateUsers = async (req, res) => {
  try {
    const data = await dataLayer.updateUsers(req.body.id, req.body.target);
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};
