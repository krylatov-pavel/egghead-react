import * as ActionTypes from './actionTypes';

let todosCount = 0;

export const addToDo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: todosCount++,
    text,
});

export const toggleToDo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});