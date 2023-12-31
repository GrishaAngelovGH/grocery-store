export const fetchAllItemsByCategory = category => ({
    type: 'FETCH_ALL_ITEMS',
    payload: {
        request: {
            url: `category/${category}`
        }
    }
})

export const searchItemByCriteria = (criteria, lang) => ({
    type: 'SEARCH_ITEM',
    criteria,
    lang
})