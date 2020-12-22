import { fetchAllItemsByCategory } from './items'

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
})