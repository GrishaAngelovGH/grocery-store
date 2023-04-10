import { connect } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'

import { clearItemsFromShoppingCart } from 'actions/shoppingCart'

const mapStateToProps = () => ({})

const mapDispatchToProps = ({
  clearItemsFromShoppingCart
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSteps)