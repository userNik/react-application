import { AsyncStorage } from 'react-native';
import { STORAGE_KEY, LAST_FOUND_REPOS_KEY } from '../constants/common';

export const saveUserToken = async ({ username, password }) => {
    try {
        // This is bad way, but I've used GitHub Basic Auth
        // https://developer.github.com/v3/auth/#basic-authentication
        const userToken = btoa(`${username.trim()}:${password.trim()}`);
        await AsyncStorage.setItem(STORAGE_KEY, userToken);
    } catch(e) {
        console.error(e);
    }
};

export const getUserToken = async () => {
    let userToken;

    try {
        userToken = await AsyncStorage.getItem(STORAGE_KEY) || '';
    } catch(e) {
        console.error(e);
    }

    return userToken;
};

export const removeUserToken = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch(e) {
        console.error(e);
    }
};

export const saveLastFoundRepos = async (repos) => {
    try {
        await AsyncStorage.setItem(LAST_FOUND_REPOS_KEY, JSON.stringify(repos));
    } catch (e) {
        console.error(e);
    }
};

export const getLastFoundRepos = async () => {
    try {
        const repos = await AsyncStorage.getItem(LAST_FOUND_REPOS_KEY) || '[]';

        return JSON.parse(repos);
    } catch (e) {
        console.error(e);
    }
};