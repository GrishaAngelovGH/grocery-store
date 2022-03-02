import { connect } from 'react-redux'
import ProductCategory from './ProductCategory'

import { fetchAllItemsByCategory } from 'actions/items'
import { addItemToShoppingCart } from 'actions/shoppingCart'

const mapStateToProps = (state) => ({
    items: state.items.all,
    filteredItems: state.items.filtered,
    lang: state.language
})

const mapDispatchToProps = ({
    fetchAllItemsByCategory,
    addItemToShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)