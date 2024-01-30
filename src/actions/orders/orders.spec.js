import { saveOrder, cancelOrder } from './orders'

describe('(Action) Orders', () => {
    it('should create action saveOrder', () => {
        const order = { id: 1 }

        const action = saveOrder(order)
        expect(action).to.eql({
            type: 'SAVE_ORDER',
            order
        })
    })

    it('should create action cancelOrder', () => {
        const action = cancelOrder(123)
        expect(action).to.eql({
            type: 'CANCEL_ORDER',
            orderId: 123
        })
    })
})