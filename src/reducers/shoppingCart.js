const initialState = {
    cartItems: []
}

const addItemToShoppingCartHandler = (state, { item }) => {
    let addedItem = [...state.cartItems].find(v => v.id === item.id)

    if (!addedItem) {
        return {
            ...state,
            cartItems: [
                ...state.cartItems,
                item
            ]
        }
    }

    return {
        ...state,
        cartItems: [...state.cartItems].map(v => {
            if (v.id === item.id) {
                return {
                    ...addedItem,
                    qty: addedItem.qty + 1
                }
            }

            return v
        })
    }
}

export default (state = initialState, action) => {
    const handlers = {
        'ADD_ITEM_TO_SHOPPING_CART': addItemToShoppingCartHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}