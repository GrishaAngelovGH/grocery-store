export const addItemToShoppingCart = (item) => ({
    type: 'ADD_ITEM_TO_SHOPPING_CART',
    item: item
})

export const removeItemFromShoppingCart = (id) => ({
    type: 'REMOVE_ITEM_FROM_SHOPPING_CART',
    id: id
})

export const changeItemQtyFromShoppingCart = ({ id, increment }) => ({
    type: 'CHANGE_ITEM_QTY_FROM_SHOPPING_CART',
    id: id,
    increment: increment
})