const initialState = []

const itemsHandler = (state, { payload: { data: { items } } }) => items

const searchItemHandler = (state, { criteria, lang }) => {
    return [...state].filter(v => v.name[lang].toLowerCase().includes(criteria))
}

export default (state = initialState, action) => {
    const handlers = {
        'FETCH_ALL_ITEMS_SUCCESS': itemsHandler,
        'SEARCH_ITEM': searchItemHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}