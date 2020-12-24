import { Component } from 'react'
import ProductItem from './ProductItem'

import HeaderSection from '../PageComponents/HeaderSection'
class ProductCategory extends Component {
    componentDidMount() {
        const { match, fetchAllItemsByCategory } = this.props

        const id = match.params.id

        fetchAllItemsByCategory(id)
    }

    render() {
        const { items, addItemToShoppingCart } = this.props

        return (
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection />

                    <div className='row no-gutters'>
                        {
                            items.map(v => (
                                <div className='col-md-6 col-lg-3 d-flex justify-content-center' key={v.id}>
                                    <ProductItem
                                        image={v.image}
                                        imageLabel={v.label}
                                        description={v.name}
                                        price={v.price}
                                        rating={v.rating}
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

export default ProductCategory