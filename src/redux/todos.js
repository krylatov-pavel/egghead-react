import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import todo from './todo';

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

const allIds = (state = [], action) => {
    if (action.filter !== 'all') {
        return state;
    }
    switch (action.type) {
        case ActionTypes.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const completedIds = (state = [], action) => {
    if (action.filter !== 'completed') {
        return state;
    }
    switch (action.type) {
        case ActionTypes.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const activeIds = (state = [], action) => {
    if (action.filter !== 'active') {
        return state;
    }
    switch (action.type) {
        case ActionTypes.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

export const todos = combineReducers({
    byId: byId,
    idsByFilter: combineReducers({
        all: allIds,
        completed: completedIds,
        active: activeIds
    })
});

export const getVisibleToDos = (state, filter) => {
    return state.idsByFilter[filter].map(id => state.byId[id]);
}