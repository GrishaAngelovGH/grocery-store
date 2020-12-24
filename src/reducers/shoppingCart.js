const initialState = {
    cartItems: []
}

const addItemToShoppingCartHandler = (state, { item }) => {
    return {
        ...state,
        cartItems: [
            ...state.cartItems,
            item
        ]
    }
}

export default (state = initialState, action) => {
    const handlers = {
        'ADD_ITEM_TO_SHOPPING_CART': addItemToShoppingCartHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}