import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {sidebarRedycer} from './reducer/sidebarRedyser'
import {informReducer} from './reducer/InformReducer'

const rootReducer = combineReducers({
  sitebar: sidebarRedycer,
  inform: informReducer
})

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)


export const store = createStore(rootReducer, composedEnhancer )