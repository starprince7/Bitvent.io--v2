// import action types
import {
    SET_USER
} from './actionTypes'

// initialize state
const initialState = {
    user: null,
    error: '',
    isLoading: false,
    authenticatedID: null
};

const StateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: return {
            ...state,
            user: action.payload
        }
        default:
            return state
    }
}

export default StateReducer;