import { ADD_USER, FETCH_USER_ERROR, REMOVE_USER } from '../constants/actionTypes';

const initialState = {
    userData: null,
    errorAuth: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, userData: { ...action.payload } };
        case FETCH_USER_ERROR:
            return { ...state,  errorAuth: action.payload };
        case REMOVE_USER:
            return { ...state, userData: null };
        default:
            return state
    }
};

export default userReducer;