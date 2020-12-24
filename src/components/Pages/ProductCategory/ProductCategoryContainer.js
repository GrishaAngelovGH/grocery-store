import { connect } from 'react-redux'
import ProductCategory from './ProductCategory'

import { fetchAllItemsByCategory } from 'actions/items'
import { addItemToShoppingCart } from 'actions/shoppingCart'

const mapStateToProps = (state) => ({
    items: state.items
})

const mapDispatchToProps = ({
    fetchAllItemsByCategory,
    addItemToShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)