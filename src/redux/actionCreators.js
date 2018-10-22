import * as ActionTypes from './actionTypes';
import * as api from '../api/todosApi';

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

export const fetchToDos = (filter) => {
    return api.fetchToDos(filter).then(todos => receiveToDos(filter, todos));
}

const receiveToDos = (filter, todos) => ({
    type: ActionTypes.RECEIVE_TODOS,
    todos,
    filter
});