import _constants from "../_constants";

const { SESSION } = _constants;
// let user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION.REGISTER:
      return {
        ...state,
        user: action.data,
      };

    case SESSION.LOGIN:
      return {
        ...state,
        user: action.data,
      };

    case SESSION.LOGOUT:
      return initialState

    default:
      return state;
  }
}
