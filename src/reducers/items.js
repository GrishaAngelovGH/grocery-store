const initialState = []

const itemsHandler = (state, { payload: { data: { items } } }) => ([...state, ...items])

export default (state = initialState, action) => {
    const handlers = {
        'FETCH_ALL_ITEMS_SUCCESS': itemsHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}