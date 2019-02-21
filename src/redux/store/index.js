import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducer from '../reducers'
import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
        reducer,
        applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(saga)

export default store