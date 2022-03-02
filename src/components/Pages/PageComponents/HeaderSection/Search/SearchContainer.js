import { connect } from 'react-redux'

import { searchItemByCriteria } from 'actions/items'

import Search from './Search'

const mapStateToProps = state => ({
    lang: state.language
})

const mapDispatchToProps = ({
    searchItemByCriteria
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)