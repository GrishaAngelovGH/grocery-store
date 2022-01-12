import { fetchCommentsById, createNewComment } from './comments'

describe('(Action) Comments', () => {
    it('should create action fetchCommentsById', () => {
        const action = fetchCommentsById('category-1', 2)
        expect(action).to.eql({
            type: 'FETCH_COMMENTS_BY_ID',
            payload: {
                request: {
                    url: 'comments/category-1/2'
                }
            }
        })
    })

    it('should create action createNewComment', () => {
        const action = createNewComment('message', 2, 'category-1', 3, 'John')
        expect(action).to.eql({
            type: 'CREATE_COMMENT',
            payload: {
                request: {
                    method: 'POST',
                    url: 'comments',
                    'data': {
                        'categoryId': 'category-1',
                        'id': 2,
                        'message': 'message',
                        'productId': 3,
                        'user': 'John'
                    }

                }
            }
        })
    })
})