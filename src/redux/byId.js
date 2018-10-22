import * as ActionTypes from './actionTypes';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVE_TODOS:
            const todos = { ...state }
            action.response.forEach(todo => {
                todos[todo.id] = todo
            });
            return todos;

        default:
            return state;
    }
};

export default byId;

export const getToDo = (state, id) => state[id];