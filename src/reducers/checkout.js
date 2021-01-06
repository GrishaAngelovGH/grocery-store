const initialValue = {
    shippingMethod: '',
    shippingMethodPrice: 0
}

const changeShippingMethodHandler = (state, { shippingMethod, price }) => ({
    shippingMethod: shippingMethod,
    shippingMethodPrice: price
})

export default (state = initialValue, action) => {
    const handlers = {
        'CHANGE_SHIPPING_METHOD': changeShippingMethodHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}