import authRecuder from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authRecuder,
    project: projectReducer
});

export default rootReducer