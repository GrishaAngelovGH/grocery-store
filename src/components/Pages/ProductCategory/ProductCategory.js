import { Component } from 'react'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem'
import EmptyProductCategory from './EmptyProductCategory'
import HeaderSection from '../PageComponents/HeaderSection'

class ProductCategory extends Component {
    componentDidMount() {
        const { match, fetchAllItemsByCategory } = this.props

        const id = match.params.id

        fetchAllItemsByCategory(id)
    }

    render() {
        const { match, items, lang, addItemToShoppingCart } = this.props

        if (!items.length) {
            return (
                <EmptyProductCategory />
            )
        }

        return (
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection selectedCategory={match.params.id} />

                    <div className='row no-gutters'>
                        {
                            items.map(v => (
                                <div className='col-md-6 col-lg-3 d-flex justify-content-center' key={v.id}>
                                    <ProductItem
                                        id={v.id}
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
    lang: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    fetchAllItemsByCategory: PropTypes.func.isRequired
}

ProductCategory.defaultProps = {
    lang: 'en'
}

export default ProductCategory