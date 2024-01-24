import { connect } from 'react-redux'

import OrderHistory from './OrderHistory'

const mapStateToProps = state => ({
    orders: state.orders,
    lang: state.language,
    checkout: state.checkout
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)