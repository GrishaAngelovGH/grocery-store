import { connect } from 'react-redux'

import Preview from './Preview'

const mapStateToProps = (state) => ({
    items: state.shoppingCart.cartItems
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Preview)