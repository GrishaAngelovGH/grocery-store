const menuLinksFormatter = menuCategoriesInput => {
    const menuCategories = { ...menuCategoriesInput }

    const menu = { en: [], bg: [] }

    /*
        This formatter replace the string values of categories with 
        object {value: '...', link: '...'}

        This approach have two benefits:
        - we keep the simplicity of menu construction i.e just add simple string as new entry
        - none of the link values is duplicated for bg and en versions

        Example:

        categories: ['Living Room Furniture', 'Bookcases & Shelving']
        categories: ['Мебели за всекидневна', 'Рафтове за книги']

        to

        categories: [
            { value: 'Living Room Furniture', link: '/category/living-room-furniture' },
            { value: 'Bookcases & Shelving', link: '/category/bookcases-&-shelving' }
        ]

        categories: [
            { value: 'Мебели за всекидневна', link: '/category/living-room-furniture' },
            { value: 'Рафтове за книги', link: '/category/bookcases-&-shelving' }
        ]

    */

    menuCategories.en.map((category, i) => {
        menu.en[i] = {
            ...category,
            subCategories: category.subCategories.map((subCategory, j) => ({
                ...subCategory,
                categories: subCategory.categories.map((value, k) => {
                    const link = `/category/${value.toLowerCase().split(' ').join('-')}`

                    const bgValue = menuCategories.bg[i].subCategories[j].categories[k]

                    const bgCategory = {}
                    bgCategory.value = bgValue.value ? bgValue.value : bgValue
                    bgCategory.link = link

                    // replace string value with object {value: '', link: ''}
                    menuCategories.bg[i].subCategories[j].categories[k] = bgCategory

                    return {
                        value,
                        link
                    }
                })
            }))
        }

        menu.bg[i] = menuCategories.bg[i]
    })

    return menu
}

export default menuLinksFormatter