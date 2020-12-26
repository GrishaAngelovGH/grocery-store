import { Component } from 'react'
import { cakeProductCategory } from 'images'

class ShoppingBagItem extends Component {
    handleRemoveItem = () => {
        const { id, removeItemFromShoppingCart } = this.props

        removeItemFromShoppingCart(id)
    }

    render() {
        const { image, description, price, qty } = this.props

        return (
            <div className='d-flex p-3'>
                <img src={cakeProductCategory[image]} width={100} height={100} />

                <div className='d-flex flex-column ml-3 font-weight-bold'>
                    <div>{description}</div>
                    <div>{price}</div>

                    <div className='d-flex flex-column font-weight-bold mt-3'>
                        <div>Qty: {qty}</div>
                        <button onClick={this.handleRemoveItem} type='button' className='btn btn-outline-primary btn-sm'>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingBagItem