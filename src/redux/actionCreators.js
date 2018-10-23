import * as ActionTypes from './actionTypes';
import * as api from '../api/todosApi';
import * as Actions from './configureStore';

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

export const fetchToDos = (filter) => (dispatch, getState) => {
    if (Actions.getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestToDos(filter));

    return api.fetchToDos(filter).then(todos => dispatch(receiveToDos(filter, todos)));
}

const requestToDos = (filter) => ({
    type: ActionTypes.REQUEST_TODOS,
    filter
});

const receiveToDos = (filter, response) => ({
    type: ActionTypes.RECEIVE_TODOS,
    response,
    filter
});