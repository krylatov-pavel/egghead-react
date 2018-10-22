import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { todos } from './todos';
import * as fromTodos from './todos';

export default () => {
    const middlewares = [promise, logger];

    return createStore(
        combineReducers({
            todos: todos
        }),
        applyMiddleware(...middlewares)
    );
};

export const getVisibleToDos = (state, filter) => fromTodos.getVisibleToDos(state.todos, filter);