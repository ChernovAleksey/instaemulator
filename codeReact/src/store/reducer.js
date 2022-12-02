import {
  GET_POSTS_ARRAY,
  GET_USERS_ARRAY,
  USER_IS_FOLLOWING,
  USER_IS_UNFOLLOWING,
  GIVING_LIKE,
  TAKING_LIKE,
  ADDING_COMMENT,
  CHOSEN_TO_OPERATE,
  IS_MODAL_OPEN,
} from "./actions";

const initialValue = {
  usersarray: [],
  postsarray: [],
  isModalOpen: false,
  chosenToOperate: {},
};
const reducer = (state = initialValue, action) => {
  switch (action.type) {

    case GET_POSTS_ARRAY: {
      return { ...state, postsarray: action.payload };
    }
      
    case GET_USERS_ARRAY: {
      return { ...state, usersarray: action.payload };
    }
      
    case USER_IS_FOLLOWING: {
      const newArray = [...state.usersarray];
      const index = newArray.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        newArray[index].isFollower = true;
      }
      return { ...state, array: newArray };
    }
      
    case USER_IS_UNFOLLOWING: {
      const newArray = [...state.usersarray];
      console.log(newArray);
      const index = newArray.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        newArray[index].isFollower = false;
      }
      return { ...state, array: newArray };
    }
      
    case GIVING_LIKE: {
      const newArray = [...state.postsarray];
      console.log(newArray);
      const index = newArray.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        newArray[index].hasBackground = true;
        newArray[index].likes = newArray[index].likes + 1;
      }
      return { ...state, array: newArray };
    }
      
    case TAKING_LIKE: {
      const newArray = [...state.postsarray];
      console.log(newArray);
      const index = newArray.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        newArray[index].hasBackground = false;
        newArray[index].likes = newArray[index].likes - 1;
      }
      return { ...state, array: newArray };
    }
      
    case ADDING_COMMENT: {
      const newArray = [...state.postsarray];
      const index = newArray.findIndex((el) => el._id === action.payload._id);
      if (index !== -1) {
        newArray[index].comments = action.payload.array;
      }
      return { ...state, array: newArray };
    }
      
    case IS_MODAL_OPEN: {
      return { ...state, isModalOpen: action.payload };
    }
      
    case CHOSEN_TO_OPERATE: {
      return { ...state, chosenToOperate: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
