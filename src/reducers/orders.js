const initialValue = {}

const saveOrderHandler = (state, { order }) => ({
    ...state,
    [order.id]: order
})

const cancelOrderHandler = (state, { orderId }) => {
    const newState = { ...state }
    newState[orderId].status = 'cancelled'
    return newState
}

export default (state = initialValue, action) => {
    const handlers = {
        'SAVE_ORDER': saveOrderHandler,
        'CANCEL_ORDER': cancelOrderHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}