export const fetchAllItemsByCategory = (category) => ({
    type: 'FETCH_ALL_ITEMS',
    payload: {
        request: {
            url: 'category/' + category
        }
    }
})