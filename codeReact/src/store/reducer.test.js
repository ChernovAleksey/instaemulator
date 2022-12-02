import reducer from "./reducer";
import {
  IS_MODAL_OPEN,
  CHOSEN_TO_OPERATE
} from "./actions";

const initialState = {
  
  usersarray: [],
  postsarray: [],
  isModalOpen: false,
  chosenToOperate: {},

};

describe("reducer works", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

test("should change isOpen", () => {
  expect(reducer(initialState, { type: IS_MODAL_OPEN, payload: true })).toEqual(
    {
      usersarray: [],
      postsarray: [],
      isModalOpen: true,
      chosenToOperate: {},
    }
  );
});
    test("should chosen item change array", () => {
      expect(
        reducer(initialState, {
          type: CHOSEN_TO_OPERATE,
          payload: { id: 111111 },
        })
      ).toEqual({
        usersarray: [],
        postsarray: [],
        isModalOpen: false,
        chosenToOperate: { id: 111111 },
      });
    });
});
