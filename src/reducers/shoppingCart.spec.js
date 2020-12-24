import shoppingCart from './shoppingCart'

describe('(Reducer) shoppingCart', () => {
    it('should append item to shoppingCart', () => {
        const state = { cartItems: ['item1'] }

        const action = {
            type: 'ADD_ITEM_TO_SHOPPING_CART',
            item: 'item2'
        }

        const newState = shoppingCart(state, action)

        expect(newState).to.eql({ cartItems: ['item1', 'item2'] })
    })

    it('should return old state when action type is mismatched', () => {
        const state = { cartItems: ['item1'] }

        const action = {
            type: 'FETCH_TYPE',
            item: 'item2'
        }

        const newState = shoppingCart(state, action)

        expect(newState).to.eql(state)
    })
})