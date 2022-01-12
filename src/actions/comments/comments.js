export const fetchCommentsById = (categoryId, productId) => ({
    type: 'FETCH_COMMENTS_BY_ID',
    payload: {
        request: {
            url: `comments/${categoryId}/${productId}`
        }
    }
})

export const createNewComment = (message, id, categoryId, productId, user) => ({
    type: 'CREATE_COMMENT',
    payload: {
        request: {
            method: 'POST',
            url: 'comments',
            data: { message, id, categoryId, productId, user }
        }
    }
})