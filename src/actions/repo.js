import {
    ADD_REPOS,
    REPO_LOADING,
    FETCH_REPOS_ERROR,
    CHANGE_NETWORK_CONNECTION_STATUS,
} from '../constants/actionTypes';
import { getRepos } from '../services/apiService';
import { saveLastFoundRepos, getLastFoundRepos } from '../services/asyncStorage';
import { mergeEntities, reStructureRepos } from '../helper';

const setLoading = (status) => ({ type: REPO_LOADING, payload: status });
const addRepos = (repos) => ({ type: ADD_REPOS, payload: repos });
const failedFetchRepos = (errorMessage) => ({ type: FETCH_REPOS_ERROR, payload: errorMessage });
const changeNetworkConnection = (networkStatus) => ({
    type: CHANGE_NETWORK_CONNECTION_STATUS,
    payload: networkStatus,
});

export const fetchReposByQuery = (config) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        let repos = [];

        if (config.q && config.q.length > 2) {
            const { data } = await getRepos(config);
            repos = reStructureRepos(data.items);
        }
        await saveLastFoundRepos(repos);
        dispatch(addRepos(repos));
    } catch (e) {
        dispatch(failedFetchRepos(e.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const loadMoreRepos = (config) => async (dispatch, getState) => {
    try {
        const { data } = await getRepos(config);
        const updatedData = reStructureRepos(data.items);
        await saveLastFoundRepos(updatedData);
        const { repo: { repos } } = getState();

        dispatch(addRepos(mergeEntities(repos, updatedData)));
    } catch (e) {
        dispatch(failedFetchRepos(e.response.data.message));
    }
};

export const loadLastFoundRepos = () => async (dispatch) => {
    dispatch(setLoading(true));

    const repos = await getLastFoundRepos();

    if (repos.length) {
        dispatch(addRepos(repos));
    } else {
        dispatch(changeNetworkConnection(false));
    }

    dispatch(setLoading(false));
};