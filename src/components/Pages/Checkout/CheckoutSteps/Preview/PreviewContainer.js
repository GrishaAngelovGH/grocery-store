import { connect } from 'react-redux'

import Preview from './Preview'

const mapStateToProps = state => ({
    lang: state.language,
    items: state.shoppingCart.cartItems,
    shippingMethod: state.checkout.shippingMethod,
    shippingMethodPrice: state.checkout.shippingMethodPrice
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Preview)