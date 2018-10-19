import * as ActionTypes from './actionTypes';
import todo from './todo';

export const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat(todo(undefined, action));
        case ActionTypes.TOGGLE_TODO:
            return state.map(e => todo(e));
        default:
            return state;
    }
};