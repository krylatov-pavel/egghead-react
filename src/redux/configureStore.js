import { createStore } from 'redux';
import { todos } from './todos';

export default () => {
    return createStore(todos);
};