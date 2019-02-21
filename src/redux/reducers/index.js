import api from './api'
import bookmark from './bookmark'
import {combineReducers} from 'redux'

const reducer = combineReducers({api,bookmark})

export default reducer