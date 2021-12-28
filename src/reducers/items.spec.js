import items from './items'

describe('(Reducer) Items', () => {
    it('should add all fetched items', () => {
        const state = ['item1']

        const action = {
            type: 'FETCH_ALL_ITEMS_SUCCESS',
            payload: { data: { items: ['item2', 'item3'] } }
        }

        const newState = items(state, action)

        expect(newState).to.eql(['item2', 'item3'])
    })

    it('should search for item based on given criteria', () => {
        const state = [
            { name: { en: 'item1' } },
            { name: { en: 'ITEM2' } },
            { name: { en: 'some' } }
        ]

        const action = {
            type: 'SEARCH_ITEM',
            criteria: 'item',
            lang: 'en'
        }

        const newState = items(state, action)

        expect(newState).to.eql([{ name: { en: 'item1' } }, { name: { en: 'ITEM2' } }])
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