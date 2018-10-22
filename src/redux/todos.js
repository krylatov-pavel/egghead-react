import * as ActionTypes from './actionTypes';
import todo from './todo';

export const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat(todo(undefined, action));
        case ActionTypes.TOGGLE_TODO:
            return state.map(e => todo(e, action));
        default:
            return state;
    }
};

export const getVisibleToDos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'active':
            return todos.filter(todo => todo.active);
        case 'completed':
            return todos.filter(todo => !todo.active);
        default:
            throw new Error('invalid todo filter type');
    }
}