import * as ActionTypes from './actionTypes';
import { combineReducers } from 'redux';

const createList = filter => {
    const ids = (state = [], action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case ActionTypes.RECEIVE_TODOS:
                return action.response.map(todo => todo.id);
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if (action.filter !== filter) {
            return state;
        }

        switch (action.type) {
            case (ActionTypes.REQUEST_TODOS):
                return true;
            case (ActionTypes.RECEIVE_TODOS):
                return false;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching
    });
};

export default createList;

export const getIds = (store) => store.ids;

export const getIsFetching = (store) => store.isFetching;