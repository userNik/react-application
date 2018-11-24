import {
    ADD_REPOS,
    REPO_LOADING,
    FETCH_REPOS_ERROR,
    CHANGE_NETWORK_CONNECTION_STATUS,
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    repos: [],
    errorMessage: null,
    networkConnection: true,
};

const repoReducers = (state = initialState, action) => {
    switch (action.type) {
        case REPO_LOADING:
            return { ...state, isLoading: action.payload };
        case ADD_REPOS:
            return { ...state,  repos: [...action.payload] };
        case FETCH_REPOS_ERROR:
            return { ...state, errorMessage: action.payload };
        case CHANGE_NETWORK_CONNECTION_STATUS:
            return { ...state, networkConnection: action.payload };
        default:
            return state
    }
};

export default repoReducers;