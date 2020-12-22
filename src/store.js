import { createStore, combineReducers, applyMiddleware } from 'redux'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import items from './reducers/items'

const client = axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json'
})

const store = createStore(
    combineReducers({
        items
    }),
    applyMiddleware(
        axiosMiddleware(client)
    )
)

export default store
