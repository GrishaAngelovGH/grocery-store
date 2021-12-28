import {
    fetchAllItemsByCategory,
    searchItemByCriteria
} from './items'

describe('(Action) Items', () => {
    it('should create action fetchAllItemsByCategory', () => {
        const action = fetchAllItemsByCategory('category-1')
        expect(action).to.eql({
            type: 'FETCH_ALL_ITEMS',
            payload: {
                request: {
                    url: 'category/category-1'
                }
            }
        })
    })

    it('should create action searchItemByCriteria', () => {
        const action = searchItemByCriteria('criteria-1', 'en')
        expect(action).to.eql({
            type: 'SEARCH_ITEM',
            criteria: 'criteria-1',
            lang: 'en'
        })
    })
})