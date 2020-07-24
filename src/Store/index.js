import { createStore, combineReducers, applyMiddleware } from 'redux'
import AuthReduce from './Reducer/authReduce'
import thunk from 'redux-thunk'

export default createStore(combineReducers({
    auth: AuthReduce
}), {}, applyMiddleware(thunk))