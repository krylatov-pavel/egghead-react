import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';
import todo from './todo';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

export const todos = combineReducers({
    byId: byId,
    idsByFilter: combineReducers({
        all: createList('all'),
        completed: createList('completed'),
        active: createList('active')
    })
});

export const getVisibleToDos = (state, filter) => {
    return fromCreateList.getIds(state.idsByFilter[filter])
        .map(id => fromById.getToDo(state.byId, id));
}