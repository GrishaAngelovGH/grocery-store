import comments from './comments'

describe('(Reducer) Comments', () => {
    it('should append new comment to category', () => {
        const state = { 'category-1': { 1: ['comment 1', 'comment 2'] } }

        const action = {
            type: 'FETCH_COMMENTS_BY_ID_SUCCESS',
            payload: { data: { comments: ['comment 3', 'comment 4'], categoryId: 'category-1', productId: 2 } }
        }

        const newState = comments(state, action)

        expect(newState).to.eql({
            'category-1': {
                1: ['comment 1', 'comment 2'],
                2: ['comment 3', 'comment 4']
            }
        })
    })

    it('should append new category', () => {
        const state = { 'category-1': { 1: ['comment 1', 'comment 2'] } }

        const action = {
            type: 'FETCH_COMMENTS_BY_ID_SUCCESS',
            payload: { data: { comments: ['comment 3', 'comment 4'], categoryId: 'category-2', productId: 2 } }
        }

        const newState = comments(state, action)

        expect(newState).to.eql({
            'category-1': {
                1: ['comment 1', 'comment 2']
            },
            'category-2': {
                2: ['comment 3', 'comment 4']
            }
        })
    })

    it('should return old state when action type is mismatched', () => {
        const state = { 'category-1': { 1: ['comment 1', 'comment 2'] } }

        const action = {
            type: 'FETCH_TYPE',
            payload: { data: { comments: ['comment 3', 'comment 4'], categoryId: 'category-1', productId: 2 } }
        }

        const newState = comments(state, action)

        expect(newState).to.eql(state)
    })
})