import { createStore, combineReducers } from 'redux';
import { todos } from './todos';
import * as fromTodos from './todos';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    if (console.group) {
        return (action) => {
            console.group(action.type);
            console.log('%c prev state ', 'color: gray', store.getState());
            console.log('%c action ', 'color: blue', action.type);
            const returnValue = rawDispatch(action);
            console.log('%c next state ', 'color: green', store.getState());
            console.groupEnd(action.type);

            return returnValue;
        }
    } else {
        return rawDispatch;
    }
};

const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(rawDispatch);
        }
        else {
            return rawDispatch(action);
        }
    }
}

export default () => {
    const store = createStore(combineReducers({
        todos: todos
    }));

    store.dispatch = addLoggingToDispatch(store);
    store.dispatch = addPromiseSupportToDispatch(store);

    return store;
};

export const getVisibleToDos = (state, filter) => fromTodos.getVisibleToDos(state.todos, filter);