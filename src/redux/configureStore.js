import { createStore, combineReducers } from 'redux';
import { todos } from './todos';
import * as fromTodos from './todos';

export default () => {
    return createStore(combineReducers({
        todos: todos
    }));
};

export const getVisibleToDos = (state, filter) => fromTodos.getVisibleToDos(state.todos, filter);