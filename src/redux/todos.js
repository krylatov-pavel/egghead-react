import { combineReducers } from 'redux';
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

export const getIsFetching = (state, filter) => fromCreateList.getIsFetching(state.idsByFilter[filter]);