import { changeShippingMethod } from './checkout'

describe('(Action) Checkout', () => {
    it('should create action changeShippingMethod', () => {
        const action = changeShippingMethod('shippingMethod', 5)
        expect(action).to.eql({
            type: 'CHANGE_SHIPPING_METHOD',
            shippingMethod: 'shippingMethod',
            price: 5
        })
    })
})