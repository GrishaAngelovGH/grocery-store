import { Component } from 'react'
class ProductCategory extends Component {
    componentDidMount() {
        const { match, fetchAllItemsByCategory } = this.props

        const id = match.params.id

        fetchAllItemsByCategory(id)
    }

    render() {
        return (
            <div>product category</div>
        )
    }
}

export default ProductCategory