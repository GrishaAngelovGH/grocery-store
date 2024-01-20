const initialValue = {}

const saveOrderHandler = (state, { order }) => ({
    ...state,
    [order.id]: order
})

export default (state = initialValue, action) => {
    const handlers = {
        'SAVE_ORDER': saveOrderHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}