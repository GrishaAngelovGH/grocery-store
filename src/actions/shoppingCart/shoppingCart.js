export const addItemToShoppingCart = (item) => ({
    type: 'ADD_ITEM_TO_SHOPPING_CART',
    item: item
})

export const removeItemFromShoppingCart = (id) => ({
    type: 'REMOVE_ITEM_FROM_SHOPPING_CART',
    id: id
})