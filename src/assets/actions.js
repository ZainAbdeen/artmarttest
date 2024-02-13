
import * as types from './actionTypes';

export const registerUserRequest = (userData) => ({
  type: types.REGISTER_USER_REQUEST,
  payload: userData,
});

export const registerUserSuccess = () => ({
  type: types.REGISTER_USER_SUCCESS,
});

export const registerUserFailure = (error) => ({
  type: types.REGISTER_USER_FAILURE,
  payload: error,
});
