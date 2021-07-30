import { combineReducers } from 'redux'
import StateReducer from './app_state/stateReducer'

const rootReducer = combineReducers({ dashboard_state: StateReducer })

export default rootReducer;