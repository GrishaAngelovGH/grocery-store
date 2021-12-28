import currencyFormatter from './currencyFormatter'

describe('(Formatter) Currency Formatter', () => {
    it('should format currency for en language', () => {
        const actual = currencyFormatter('en', '£', 30)

        expect(actual).to.equal('£30')
    })

    it('should format currency for bg language', () => {
        const actual = currencyFormatter('bg', 'лв', 30)

        expect(actual).to.equal('30лв')
    })
})