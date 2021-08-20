// import action types
import {
    SET_MSG,
    SET_USER,
    SET_USERS,
    SET_ERROR,
    SET_LOADING,
    SET_INVOICE,
    CLEAR_MSG,
    CLEAR_ERROR,
    SET_CRYPTO_PRICE,
    SET_LOG_USER_OUT,
    SET_AUTHENTICATED_ID,
    SET_WITHDRAW_REQUEST
} from './actionTypes'

// initialize state
const initialState = {
    msg: null,
    error: null,
    user: null,
    users: null,
    invoice: null,
    isLoading: false,
    cryptoPrice: null,
    authenticatedID: null,
    withdraw_request: null
};

const StateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MSG: return {
            ...state,
            msg: action.payload
        }
        case CLEAR_MSG: return {
            ...state,
            msg: null
        }
        case SET_USER: return {
            ...state,
            error: null,
            isLoading: false,
            user: action.payload,
            authenticatedID: action.payload?._id
        }
        case SET_USERS: return {
            ...state,
            users: action.payload
        }
        case SET_INVOICE: return {
            ...state,
            invoice: action.payload
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
            error: null
        }
        case SET_AUTHENTICATED_ID: return {
            ...state,
            authenticatedID: action.payload
        }
        case SET_WITHDRAW_REQUEST: return {
            ...state,
            withdraw_request: action.payload
        }
        case SET_CRYPTO_PRICE: return {
            ...state,
            cryptoPrice: action.payload
        }
        case SET_LOG_USER_OUT: return {
            ...state,
            msg: null,
            error: null,
            user: null,
            users: null,
            invoice: null,
            cryptoPrice: null,
            authenticatedID: null,
            withdraw_request: null
        }
        default:
            return state
    }
}

export default StateReducer;