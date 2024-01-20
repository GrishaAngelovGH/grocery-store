import { expect } from 'chai'
import orders from './orders'

describe('(Reducer) orders', () => {
    it('should append new order to the existing orders', () => {
        const state = { 1: { id: 1 } }
        const order = { id: 2 }

        const action = {
            type: 'SAVE_ORDER',
            order
        }

        const newState = orders(state, action)
        expect(newState).to.eql({
            1: { id: 1 },
            2: { id: 2 }
        })
    })

    it('should return old state when action type is mismatched', () => {
        const state = { 1: { id: 1 } }
        const order = { id: 2 }

        const action = {
            type: 'FETCH_TYPE',
            order
        }

        const newState = orders(state, action)

        expect(newState).to.eql(state)
    })
})