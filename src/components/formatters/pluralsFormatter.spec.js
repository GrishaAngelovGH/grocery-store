import pluralsFormatter from './pluralsFormatter'

describe('(Formatter) Plurals Formatter', () => {
    it('should format single item label', () => {
        const label = {
            value: 'item',
            plural: 's'
        }

        const actual = pluralsFormatter(1, label)

        expect(actual).to.equal('1 item')
    })

    it('should format multiple items label', () => {
        const label = {
            value: 'item',
            plural: 's'
        }

        const actual = pluralsFormatter(5, label)

        expect(actual).to.equal('5 items')
    })
})