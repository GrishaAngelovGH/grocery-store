const initialValue = {}

const fetchCommentsByIdHandler = (state, { payload: { data: { comments, categoryId, productId } } }) => ({
    ...state,
    [categoryId]: {
        ...state[categoryId],
        [productId]: comments
    }
})

export default (state = initialValue, action) => {
    const handlers = {
        'FETCH_COMMENTS_BY_ID_SUCCESS': fetchCommentsByIdHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}