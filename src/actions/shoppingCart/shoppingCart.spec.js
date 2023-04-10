import {
    addItemToShoppingCart,
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart,
    clearItemsFromShoppingCart
} from './shoppingCart'

describe('(Action) shoppingCart', () => {
    it('should create action addItemToShoppingCart', () => {
        const item = {
            image: 'image',
            description: 'description',
            price: 'price'
        }

        const action = addItemToShoppingCart(item)

        expect(action).to.eql({
            type: 'ADD_ITEM_TO_SHOPPING_CART',
            item: item
        })
    })

    it('should create action removeItemFromShoppingCart', () => {
        const action = removeItemFromShoppingCart('id-1')

        expect(action).to.eql({
            type: 'REMOVE_ITEM_FROM_SHOPPING_CART',
            id: 'id-1'
        })
    })

    it('should create action changeItemQtyFromShoppingCart', () => {
        const action = changeItemQtyFromShoppingCart({ id: 'id-1', increment: true })

        expect(action).to.eql({
            type: 'CHANGE_ITEM_QTY_FROM_SHOPPING_CART',
            id: 'id-1',
            increment: true
        })
    })

    it('should create action clearItemsFromShoppingCart', () => {
        const action = clearItemsFromShoppingCart()

        expect(action).to.eql({
            type: 'CLEAR_ITEMS_FROM_SHOPPING_CART'
        })
    })
})