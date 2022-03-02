import items from './items'

describe('(Reducer) Items', () => {
    it('should add all fetched items', () => {
        const state = { all: ['item1'], filtered: [] }

        const action = {
            type: 'FETCH_ALL_ITEMS_SUCCESS',
            payload: { data: { items: ['item1', 'item2', 'item3'] } }
        }

        const newState = items(state, action)

        expect(newState).to.eql({ all: ['item1', 'item2', 'item3'], filtered: [] })
    })

    it('should search for item based on given non-empty criteria', () => {
        const state = {
            all: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } },
                { name: { en: 'some' } }
            ],
            filtered: []
        }

        const action = {
            type: 'SEARCH_ITEM',
            criteria: 'item',
            lang: 'en'
        }

        const newState = items(state, action)

        expect(newState).to.eql({
            all: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } },
                { name: { en: 'some' } }
            ],
            filtered: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } }
            ]
        })
    })

    it('should search for item based on given empty criteria', () => {
        const state = {
            all: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } },
                { name: { en: 'some' } }
            ],
            filtered: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } }
            ]
        }

        const action = {
            type: 'SEARCH_ITEM',
            criteria: '',
            lang: 'en'
        }

        const newState = items(state, action)

        expect(newState).to.eql({
            all: [
                { name: { en: 'item1' } },
                { name: { en: 'ITEM2' } },
                { name: { en: 'some' } }
            ],
            filtered: []
        })
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