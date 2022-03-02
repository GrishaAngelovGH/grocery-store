import { Component } from 'react'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem'
import EmptyProductCategory from './EmptyProductCategory'
import HeaderSection from '../PageComponents/HeaderSection'

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

        return (
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection selectedCategory={categoryId} />

                    <div className='row no-gutters'>
                        {
                            !filteredItems.length && items.map(v => (
                                <div className='col-md-6 col-lg-3 d-flex justify-content-center' key={v.id}>
                                    <ProductItem
                                        id={v.id}
                                        categoryId={categoryId}
                                        image={v.image}
                                        imageLabel={v.label}
                                        description={v.name}
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
                                        description={v.name}
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