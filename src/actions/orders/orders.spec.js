import { saveOrder } from './orders'

describe('(Action) Orders', () => {
    it('should create action saveOrder', () => {
        const order = { id: 1 }

        const action = saveOrder(order)
        expect(action).to.eql({
            type: 'SAVE_ORDER',
            order
        })
    })
})