import shoppingCart from './shoppingCart'

describe('(Reducer) shoppingCart', () => {
    it('should append item to shoppingCart', () => {
        const state = { cartItems: [{ id: 1, qty: 1 }] }

        const action = {
            type: 'ADD_ITEM_TO_SHOPPING_CART',
            item: { id: 2, qty: 1 }
        }

        const newState = shoppingCart(state, action)

        expect(newState).to.eql({ cartItems: [{ id: 1, qty: 1 }, { id: 2, qty: 1 }] })
    })

    it('should append already added item to shoppingCart', () => {
        const state = { cartItems: [{ id: 1, qty: 1 }] }

        const action = {
            type: 'ADD_ITEM_TO_SHOPPING_CART',
            item: { id: 1, qty: 1 }
        }

        const newState = shoppingCart(state, action)

        expect(newState).to.eql({ cartItems: [{ id: 1, qty: 2 }] })
    })

    it('should remove item from shoppingCart', () => {
        const state = {
            cartItems: [
                { id: 1, qty: 1 },
                { id: 2, qty: 1 },
                { id: 3, qty: 1 }
            ]
        }

        const action = {
            type: 'REMOVE_ITEM_FROM_SHOPPING_CART',
            id: 2
        }

        const newState = shoppingCart(state, action)

        expect(newState).to.eql({ cartItems: [{ id: 1, qty: 1 }, { id: 3, qty: 1 }] })
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