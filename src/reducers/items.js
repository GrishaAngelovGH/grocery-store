const initialState = { all: [], filtered: [] }

const itemsHandler = (state, { payload: { data: { items } } }) => ({ all: items, filtered: [] })

const searchItemHandler = (state, { criteria, lang }) => {
    if (!criteria.length) {
        return ({ ...state, filtered: [] })
    }

    return ({
        ...state,
        filtered: [...state.all].filter(v => v.name[lang].toLowerCase().includes(criteria))
    })
}

export default (state = initialState, action) => {
    const handlers = {
        'FETCH_ALL_ITEMS_SUCCESS': itemsHandler,
        'SEARCH_ITEM': searchItemHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}