import * as ActionTypes from './actionTypes';
import { combineReducers } from 'redux';

const createList = filter => {
    const ids = (state = [], action) => {

        switch (action.type) {
            case ActionTypes.FETCH_TODOS_SUCCESS:
                if (action.filter === filter) {
                    return action.response.map(todo => todo.id);
                }
                return state;
            case ActionTypes.ADD_TODO_SUCCESS:
                if (filter !== 'completed') { //0
                    return state.concat(action.response.id);
                }
                return state;
            case ActionTypes.TOGGLE_TODO_SUCCESS:
                if (filter === 'all')
                    return state;
                if (filter === 'active' && action.response.active || filter === 'completed' && !action.response.active) {
                    return state.concat(action.response.id);
                } else {
                    return [...state.slice(0, state.indexOf(action.response.id)),
                    ...state.slice(state.indexOf(action.response.id) + 1)];
                }
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