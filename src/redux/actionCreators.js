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

    dispatch({
        type: ActionTypes.FETCH_TODOS_REQUEST,
        filter
    });

    return api.fetchToDos(filter).then(
        response => dispatch({
            type: ActionTypes.FETCH_TODOS_SUCCESS,
            response,
            filter
        }),
        error => dispatch({
            type: ActionTypes.FETCH_TODOS_FAILURE,
            message: error.message || 'something went wrong',
            filter
        }));
};