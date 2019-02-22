import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducer from '../reducers'
import saga from '../sagas'
import {persistStore, persistReducer} from 'redux-persist'
import {AsyncStorage} from 'react-native'

const persistConfig = {
        key: '@ReactJobs',
        storage: AsyncStorage,
        whitelist: ['bookmark']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
        persistedReducer,
        applyMiddleware(logger, sagaMiddleware)
)

const persistor = persistStore(store)

sagaMiddleware.run(saga)

export { store, persistor}