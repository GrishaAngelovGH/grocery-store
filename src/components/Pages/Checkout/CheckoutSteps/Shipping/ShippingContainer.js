import { connect } from 'react-redux'
import Shipping from './Shipping'

import { changeShippingMethod } from 'actions/checkout'

const mapStateToProps = state => ({
    lang: state.language
})

const mapDispatchToProps = ({
    changeShippingMethod
})

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)