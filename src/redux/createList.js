import * as ActionTypes from './actionTypes';
import { combineReducers } from 'redux';

const createList = filter => {
    const ids = (state = [], action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case ActionTypes.FETCH_TODOS_SUCCESS:
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
            case (ActionTypes.FETCH_TODOS_REQUEST):
                return true;
            case (ActionTypes.FETCH_TODOS_SUCCESS):
            case (ActionTypes.FETCH_TODOS_FAILURE):
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if (action.filter !== filter) {
            return state;
        }

        switch (action.type) {
            case ActionTypes.FETCH_TODOS_REQUEST:
            case ActionTypes.FETCH_TODOS_SUCCESS:
                return null;
            case ActionTypes.FETCH_TODOS_FAILURE:
                return action.message;
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

export const getIds = (store) => store.ids;

export const getIsFetching = (store) => store.isFetching;

export const getErrorMessage = (store) => store.errorMessage;