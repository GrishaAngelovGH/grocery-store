import { connect } from 'react-redux'
import ShoppingBag from './ShoppingBag'

import { removeItemFromShoppingCart } from 'actions/shoppingCart'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({
    removeItemFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)