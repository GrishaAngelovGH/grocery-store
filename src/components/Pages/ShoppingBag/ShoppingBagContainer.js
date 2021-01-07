import { connect } from 'react-redux'
import ShoppingBag from './ShoppingBag'

import {
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart
} from 'actions/shoppingCart'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)