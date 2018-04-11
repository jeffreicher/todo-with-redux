import types from '../actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {}
};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case types.GET_LIST_DATA:
            return {...state, items: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            return {...state, singleItem: action.payload.data.todo};
        case types.MARK_COMPLETE:
            console.log('Completed:', action)
            return {...state, singleItem: action.payload.data.todo};
            case types.DELETE:
            console.log('Delete:', action);
            return {...state, singleItem: action.payload.data.todo};
        default: 
            return state;
    };
};