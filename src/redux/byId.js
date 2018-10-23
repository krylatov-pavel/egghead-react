import * as ActionTypes from './actionTypes';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS_SUCCESS:
            const todos = { ...state }
            action.response.forEach(todo => {
                todos[todo.id] = todo
            });
            return todos;
        case ActionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                [action.response.id]: action.response
            };
        case ActionTypes.TOGGLE_TODO_SUCCESS:
            const todosCopy = { ...state };
            todosCopy[action.response.id] = action.response;
            return todosCopy;
        default:
            return state;
    }
};

export default byId;

export const getToDo = (state, id) => state[id];