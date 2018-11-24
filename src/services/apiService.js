import axiosLib from 'axios';

import { API_URL, REPOS_PER_PAGE } from '../../config';

const axios = axiosLib.create({
   baseURL: API_URL,
    ...axiosLib.defaults.transformRequest,
});

export const addAuthHeader = (auth) => {
    axios.defaults.headers.common['Authorization'] = `Basic ${auth}`;
};

export const signInUser = async ({ username, password }) => {
    const auth = btoa(`${username.trim()}:${password.trim()}`);

    addAuthHeader(auth);

    return axios.get('/user');
};

export const getRepos = async ({ q, page, sort = '' }) => {
    return axios.get('/search/repositories', {
        params: {
            q,
            sort,
            per_page: REPOS_PER_PAGE,
            page,
        }
    });
};
