import { ADD_USER, FETCH_USER_ERROR, REMOVE_USER } from "../constants/actionTypes";
import { signInUser } from '../services/apiService';
import { saveUserToken, removeUserToken } from '../services/asyncStorage';

const addUser = (user) => ({ type: ADD_USER, payload: user });
const failedFetchUser = (errorMessage) => ({ type: FETCH_USER_ERROR, payload: errorMessage });
const removeUser = () => ({ type: REMOVE_USER });

export const fetchUser = (userData) => async (dispatch) => {
    try {
        const { data } = await signInUser(userData);

        await saveUserToken(userData);

        dispatch(addUser(data));
    } catch(e) {
        dispatch(failedFetchUser(e.response.data.message));
    }
};

export const logOut = () =>  async (dispatch) => {
  try {
      await removeUserToken();

      dispatch(removeUser())
  } catch(e) {
      console.error(e);
  }
};