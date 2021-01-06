import { connect } from 'react-redux'

import Preview from './Preview'

const mapStateToProps = (state) => ({
    items: state.shoppingCart.cartItems,
    shippingMethod: state.checkout.shippingMethod,
    shippingMethodPrice: state.checkout.shippingMethodPrice
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Preview)