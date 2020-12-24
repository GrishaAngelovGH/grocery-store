import { connect } from 'react-redux'

import ShoppingBag from './ShoppingBag'

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)