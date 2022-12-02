import {
  GET_POSTS_ARRAY,
  GET_USERS_ARRAY,
  USER_IS_FOLLOWING,
  USER_IS_UNFOLLOWING,
  GIVING_LIKE,
  TAKING_LIKE,
  ADDING_COMMENT,
  IS_MODAL_OPEN,
  CHOSEN_TO_OPERATE,
} from "./actions";

export const getPostsArrayAC = () => async (dispatch) => {
  let postsarray = [];
  const { data } = await fetch(process.env.REACT_APP_API_URL_POSTS).then(
    (res) => res.json()
  );
  postsarray = data;
  dispatch({ type: GET_POSTS_ARRAY, payload: postsarray });
};

export const getUsersArrayAC = () => async (dispatch) => {
  let usersarray = [];
  const { data } = await fetch(process.env.REACT_APP_API_URL_USERS).then(
    (res) => res.json()
  );
  usersarray = data;
  dispatch({ type: GET_USERS_ARRAY, payload: usersarray });
};

export const isUserFollowingAC =
  ({ _id }) =>
  async (dispatch) => {
    fetch(process.env.REACT_APP_API_URL_USERS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id, target: { isFollower: true } }),
    });
    dispatch({ type: USER_IS_FOLLOWING, payload: _id });
  };

export const isUserUnFollowingAC =
  ({ _id }) =>
  async (dispatch) => {
    fetch(process.env.REACT_APP_API_URL_USERS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id, target: { isFollower: false } }),
    });
    dispatch({ type: USER_IS_UNFOLLOWING, payload: _id });
  };

export const givingLikeAC =
  ({ _id, likes }) =>
  async (dispatch) => {
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
        target: { hasBackground: true, likes: likes + 1 },
      }),
    });
    dispatch({ type: GIVING_LIKE, payload: _id });
  };

export const takingLikeAC =
  ({ _id, likes }) =>
  async (dispatch) => {
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
        target: { hasBackground: false, likes: likes - 1 },
      }),
    });
    dispatch({ type: TAKING_LIKE, payload: _id });
  };

export const addingCommentAC =
  ({ _id, array }) =>
  async (dispatch) => {
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id, target: { comments: array } }),
    });
    dispatch({ type: ADDING_COMMENT, payload: { _id, array } });
  };

export const isModalOpenAC = (payload) => ({ type: IS_MODAL_OPEN, payload });

export const chosenToOperateAC = (payload) => ({
  type: CHOSEN_TO_OPERATE,
  payload,
});
