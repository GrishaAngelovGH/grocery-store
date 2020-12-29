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
            <div className='row m-3 p-3 border shadow-sm'>
                <div className='col-md-4'>
                    <img src={cakeProductCategory[image]} width={160} height={160} />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='row no-gutters'>{description}</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>Price: {`${currency}${price}`}</div>

                            <div>Qty: {qty}</div>

                            <div>Subtotal: {currency}{qty * price}</div>
                        </div>

                    </div>

                    <div className='row mt-2'>
                        <div className='col-md-12'>
                            <button
                                type='button'
                                className='btn btn-outline-primary btn-sm btn-block'
                                onClick={this.handleRemoveItem}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingBagItem