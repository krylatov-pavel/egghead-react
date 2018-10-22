import * as ActionTypes from './actionTypes';

const createList = filter => (state = [], action) => {
    if (action.filter !== filter) {
        return state;
    }
    switch (action.type) {
        case ActionTypes.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

export default createList;

export const getIds = (store) => store;