
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
