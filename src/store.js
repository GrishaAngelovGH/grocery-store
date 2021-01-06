import { createStore, combineReducers, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import items from './reducers/items'
import shoppingCart from './reducers/shoppingCart'
import checkout from './reducers/checkout'

const client = axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json'
})

const store = createStore(
    combineReducers({
        items,
        shoppingCart,
        checkout
    }),
    applyMiddleware(
        axiosMiddleware(client)
    )
)

export default store
