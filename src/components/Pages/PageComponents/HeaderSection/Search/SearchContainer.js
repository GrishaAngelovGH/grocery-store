import { connect } from 'react-redux'

import { searchItemByCriteria, fetchAllItemsByCategory } from 'actions/items'

import Search from './Search'

const mapStateToProps = () => ({})

const mapDispatchToProps = ({
    searchItemByCriteria,
    fetchAllItemsByCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)