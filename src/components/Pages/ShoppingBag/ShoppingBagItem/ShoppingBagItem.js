import { Component } from 'react'
import PropTypes from 'prop-types'

import { cakeProductCategory } from 'images'
import { ChevronLeft, ChevronRight } from 'components/Icons'

class ShoppingBagItem extends Component {
    handleRemoveItem = () => {
        const { id, removeItemFromShoppingCart } = this.props

        removeItemFromShoppingCart(id)
    }

    handleIncrementQty = () => {
        const { id, changeItemQtyFromShoppingCart } = this.props
        changeItemQtyFromShoppingCart({ id: id, increment: true })
    }

    handleDecrementQty = () => {
        const { id, changeItemQtyFromShoppingCart } = this.props
        changeItemQtyFromShoppingCart({ id: id, increment: false })
    }

    render() {
        const { image, description, currency, price, qty } = this.props

        return (
            <div className='row m-3 p-3 border shadow-sm jumbotron'>
                <div className='col-md-6'>
                    <img src={cakeProductCategory[image]} width={160} height={160} />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='row no-gutters'>{description}</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>Price: {`${currency}${price}`}</div>

                            <div className='d-flex align-items-center'>
                                <div>Qty:</div>
                                <div className='btn-group' role='group'>
                                    <button type='button' className='btn btn-sm btn-primary' onClick={this.handleDecrementQty}>
                                        <ChevronLeft />
                                    </button>

                                    <button type='button' className='btn btn-sm btn-primary'>
                                        {qty}
                                    </button>

                                    <button type='button' className='btn btn-sm btn-primary' onClick={this.handleIncrementQty}>
                                        <ChevronRight />
                                    </button>
                                </div>
                            </div>

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

ShoppingBagItem.propTypes = {
    id: PropTypes.any.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    changeItemQtyFromShoppingCart: PropTypes.func.isRequired
}

export default ShoppingBagItem