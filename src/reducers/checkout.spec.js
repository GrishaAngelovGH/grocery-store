import checkout from './checkout'

describe('(Reducer) Checkout', () => {
    it('should change shipping method', () => {
        const state = { shippingMethod: 'shippingMethod-1', shippingMethodPrice: 1 }


        const action = {
            type: 'CHANGE_SHIPPING_METHOD',
            shippingMethod: 'shippingMethod-2',
            price: 2

        }

        const newState = checkout(state, action)

        expect(newState).to.eql({ shippingMethod: 'shippingMethod-2', shippingMethodPrice: 2 })
    })

    it('should return old state when action type is mismatched', () => {
        const state = { shippingMethod: 'shippingMethod-1', shippingMethodPrice: 1 }

        const action = {
            type: 'FETCH_TYPE',
            shippingMethod: 'shippingMethod-2',
            price: 2
        }

        const newState = checkout(state, action)

        expect(newState).to.eql(state)
    })
})