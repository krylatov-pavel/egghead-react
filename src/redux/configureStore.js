import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { todos } from './todos';
import * as fromTodos from './todos';

const thunk = (store) => (next) => (action) => typeof action === 'function'
    ? action(store.dispatch)
    : next(action);

export default () => {
    const middlewares = [thunk, logger];

    return createStore(
        combineReducers({
            todos: todos
        }),
        applyMiddleware(...middlewares)
    );
};

export const getVisibleToDos = (state, filter) => fromTodos.getVisibleToDos(state.todos, filter);
export const getIsFetching = (state, filter) => fromTodos.getIsFetching(state.todos, filter);