import { connect } from 'react-redux'

import { removeItemFromShoppingCart } from 'actions/shoppingCart'

import MiniShoppingBag from './MiniShoppingBag'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({
    removeItemFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniShoppingBag)