import language from './language'

describe('(Reducer) language', () => {
    it('should append item to shoppingCart', () => {
        const state = 'en'

        const action = {
            type: 'CHANGE_LANGUAGE',
            language: 'bg'
        }

        const newState = language(state, action)

        expect(newState).to.eql('bg')
    })

    it('should return old state when action type is mismatched', () => {
        const state = 'en'

        const action = {
            type: 'FETCH_TYPE',
            item: 'item2'
        }

        const newState = language(state, action)

        expect(newState).to.eql(state)
    })
})