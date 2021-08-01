// import action types
import {
    SET_USER,
    SET_ERROR,
    CLEAR_ERROR,
    SET_LOADING,
    SET_AUTHENTICATED_ID,
} from './actionTypes'

// initialize state
const initialState = {
    error: null,
    user: null,
    isLoading: false,
    authenticatedID: null
};

const StateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: return {
            error: null,
            isLoading: false,
            user: action.payload,
            authenticatedID: action.payload._id
        }
        case SET_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        case SET_ERROR: return {
            ...state,
            isLoading: false,
            error: action.payload
        }
        case CLEAR_ERROR: return {
            ...state,
            error: ''
        }
        case SET_AUTHENTICATED_ID: return {
            ...state,
            authenticatedID: action.payload
        }
        default:
            return state
    }
}

export default StateReducer;