import { combineReducers } from 'redux';
import user from './user';
import repo from './repo';

export default combineReducers({ user, repo });