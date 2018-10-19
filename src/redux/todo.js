import * as ActionTypes from './actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                active: true
            };
        case ActionTypes.TOGGLE_TODO:
            if (state.id === action.id) {
                return {
                    ...state,
                    active: !state.active
                }
            } else {
                return state;
            }
        default:
            return state;
    }
};