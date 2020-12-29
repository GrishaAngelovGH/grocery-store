import items from './items'

describe('(Reducer) Items', () => {
    it('should append all fetched items', () => {
        const state = ['item1']

        const action = {
            type: 'FETCH_ALL_ITEMS_SUCCESS',
            payload: { data: { items: ['item2', 'item3'] } }
        }

        const newState = items(state, action)

        expect(newState).to.eql(['item2', 'item3'])
    })

    it('should return old state when action type is mismatched', () => {
        const state = ['item1']

        const action = {
            type: 'FETCH_TYPE',
            payload: { data: { items: ['item2', 'item3'] } }
        }

        const newState = items(state, action)

        expect(newState).to.eql(state)
    })
})