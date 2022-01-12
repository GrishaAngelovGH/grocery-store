import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import items from './reducers/items'
import shoppingCart from './reducers/shoppingCart'
import checkout from './reducers/checkout'
import language from './reducers/language'
import comments from './reducers/comments'

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
        checkout,
        language,
        comments
    })),
    applyMiddleware(
        axiosMiddleware(client)
    )
)

const persistor = persistStore(store)

export { store, persistor }
