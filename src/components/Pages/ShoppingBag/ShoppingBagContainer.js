import { connect } from 'react-redux'
import ShoppingBag from './ShoppingBag'

import {
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart,
    clearItemsFromShoppingCart
} from 'actions/shoppingCart'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems,
    lang: state.language
})

const mapDispatchToProps = ({
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart,
    clearItemsFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)