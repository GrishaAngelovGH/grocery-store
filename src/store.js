import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import items from './reducers/items'
import shoppingCart from './reducers/shoppingCart'
import checkout from './reducers/checkout'

const client = axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json'
})

const persistConfig = {
    key: 'root',
    storage
}

const store = createStore(
    persistReducer(persistConfig, combineReducers({
        items,
        shoppingCart,
        checkout
    })),
    applyMiddleware(
        axiosMiddleware(client)
    )
)

const persistor = persistStore(store)

export { store, persistor }
