import { connect } from 'react-redux'
import ProductCategory from './ProductCategory'

import { fetchAllItemsByCategory } from 'actions/items'

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = ({
    fetchAllItemsByCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory)