import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'

import classes from './classInfo';
import players from './players';
import classRosters from './classRoster';
import coaches from './coaches';
import view from './view';

const reducer = combineReducers({ auth, classes, players, classRosters, coaches, view})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
