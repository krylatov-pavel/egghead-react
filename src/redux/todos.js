import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import todo from './todo';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
        case ActionTypes.TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat(action.id);
        default:
            return state;
    }
};

export const todos = combineReducers({
    byId: byId,
    allIds: allIds
});

const getAllTodos = (state) => state.allIds.map((id) => state.byId[id]);

export const getVisibleToDos = (state, filter) => {
    const allTodos = getAllTodos(state)
    switch (filter) {
        case 'all':
            return allTodos;
        case 'active':
            return allTodos.filter(todo => todo.active);
        case 'completed':
            return allTodos.filter(todo => !todo.active);
        default:
            throw new Error('invalid todo filter type');
    }
}