import { Component } from 'react'
import { cakeProductCategory } from 'images'

class ShoppingBagItem extends Component {
    handleRemoveItem = () => {
        const { id, removeItemFromShoppingCart } = this.props

        removeItemFromShoppingCart(id)
    }

    render() {
        const { image, description, currency, price, qty } = this.props

        return (
            <div className='d-flex p-3'>
                <img src={cakeProductCategory[image]} width={120} height={120} />

                <div className='d-flex flex-column justify-content-around ml-3 font-weight-bold w-100'>
                    <div>{description}</div>
                    <div>{`${currency}${price}`}</div>

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