import { connect } from 'react-redux'

import OrderHistory from './OrderHistory'

const mapStateToProps = ({ orders }) => ({ orders: Object.values(orders) })

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)