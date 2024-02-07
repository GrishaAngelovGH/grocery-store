import { connect } from 'react-redux'

import OrderHistory from './OrderHistory'

import { cancelOrder } from 'actions/orders'

const mapStateToProps = state => ({
    orders: state.orders,
    lang: state.language
})

const mapDispatchToProps = ({
    cancelOrder
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)