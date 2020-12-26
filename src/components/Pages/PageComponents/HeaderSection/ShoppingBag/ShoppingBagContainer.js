import { connect } from 'react-redux'

import { removeItemFromShoppingCart } from 'actions/shoppingCart'

import ShoppingBag from './ShoppingBag'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({
    removeItemFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)