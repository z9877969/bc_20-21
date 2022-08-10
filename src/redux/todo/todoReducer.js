import { actionTypes } from "./todoActions";

const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return [...state, payload];
    case actionTypes.REMOVE_TODO:
      return state.filter((el) => el.id !== payload);
    case actionTypes.UPDATE_STATUS_TODO:
      return state.map((el) =>
        el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      );
    default:
      return state;
  }
};

export default todoReducer;
