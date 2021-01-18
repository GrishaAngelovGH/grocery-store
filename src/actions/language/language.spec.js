import { changeLanguage } from './language'

describe('(Action) changeLanguage', () => {
    it('should create changeLanguage action', () => {
        const action = changeLanguage('en')
        expect(action).to.eql({
            type: 'CHANGE_LANGUAGE',
            language: 'en'
        })
    })
})