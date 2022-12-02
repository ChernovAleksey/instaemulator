import PostsDataLayer from "./postsDataLayer.js";

const dataLayer = new PostsDataLayer();

export const getPosts = async (req, res) => {
  try {
    const data = await dataLayer.getPosts();
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};

export const addPosts = async (req, res) => {
  try {
    const data = await dataLayer.addPosts(req.body);
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const data = await dataLayer.updatePosts(req.body.id, req.body.target);
    res.json({ status: "success", data });
  } catch (error) {
    res.status(400).json({ status: "error", massage: error.message });
  }
};
