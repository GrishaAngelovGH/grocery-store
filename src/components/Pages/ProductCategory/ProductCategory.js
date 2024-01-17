import { Component } from 'react'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem'
import EmptyProductCategory from './EmptyProductCategory'
import HeaderSection from '../PageComponents/HeaderSection'

import menuCategories from 'components/Pages/PageComponents/HeaderSection/Menu/menuCategories'

class ProductCategory extends Component {
    componentDidMount() {
        const { categoryId, fetchAllItemsByCategory } = this.props

        fetchAllItemsByCategory(categoryId)
    }

    render() {
        const { categoryId, items, filteredItems, lang, addItemToShoppingCart } = this.props

        if (!items.length) {
            return (
                <EmptyProductCategory />
            )
        }

        const subCategories = menuCategories[lang].map(v => v.subCategories).flat()
        const categories = subCategories.map(v => v.categories).flat()
        const category = categories.find(v => v.link.includes(categoryId)).value

        return (
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection selectedCategory={categoryId} />

                    <h1 className='text-secondary text-center text-capitalize border bg-light p-1 mt-3'>
                        {category}
                    </h1>

                    <div className='row no-gutters'>
                        {
                            !filteredItems.length && items.map(v => (
                                <div className='col-md-6 col-lg-3 d-flex justify-content-center' key={v.id}>
                                    <ProductItem
                                        id={v.id}
                                        categoryId={categoryId}
                                        image={v.image}
                                        imageLabel={v.label}
                                        name={v.name}
                                        description={v.description}
                                        currency={v.currency}
                                        price={v.price}
                                        rating={v.rating}
                                        lang={lang}
                                        addItemToShoppingCart={addItemToShoppingCart}
                                    />
                                </div>
                            ))
                        }

                        {
                            filteredItems.length > 0 && filteredItems.map(v => (
                                <div className='col-md-6 col-lg-3 d-flex justify-content-center' key={v.id}>
                                    <ProductItem
                                        id={v.id}
                                        categoryId={categoryId}
                                        image={v.image}
                                        imageLabel={v.label}
                                        name={v.name}
                                        description={v.description}
                                        currency={v.currency}
                                        price={v.price}
                                        rating={v.rating}
                                        lang={lang}
                                        addItemToShoppingCart={addItemToShoppingCart}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ProductCategory.propTypes = {
    categoryId: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    filteredItems: PropTypes.array.isRequired,
    addItemToShoppingCart: PropTypes.func.isRequired,
    fetchAllItemsByCategory: PropTypes.func.isRequired
}

ProductCategory.defaultProps = {
    lang: 'en'
}

export default ProductCategory