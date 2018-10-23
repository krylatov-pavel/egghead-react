import * as ActionTypes from './actionTypes';
import * as api from '../api/todosApi';
import * as Actions from './configureStore';

export const addToDo = (text) => (dispatch) => {
    api.addToDo(text).then(response => dispatch({
        type: ActionTypes.ADD_TODO_SUCCESS,
        response
    }));
}

export const toggleToDo = (id) => (dispatch) => {
    api.toggleToDo(id).then(response => dispatch({
        type: ActionTypes.TOGGLE_TODO_SUCCESS,
        response
    }));
};

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