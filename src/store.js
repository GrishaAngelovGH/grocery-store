import { createStore, combineReducers } from 'redux'

import items from './reducers/items'

const store = createStore(
    combineReducers({
        items
    })
)

export default store
