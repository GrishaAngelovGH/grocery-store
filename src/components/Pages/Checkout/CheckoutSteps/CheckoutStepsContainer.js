import { connect } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'

import { saveOrder } from 'actions/orders'
import { clearItemsFromShoppingCart } from 'actions/shoppingCart'


const mapStateToProps = state => ({
  items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({
  saveOrder,
  clearItemsFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSteps)