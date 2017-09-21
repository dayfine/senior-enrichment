import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

const initialState = {
  jokes: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    default:
      return null
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware))
