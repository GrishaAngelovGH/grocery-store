import { Component } from 'react'
import PropTypes from 'prop-types'

import { cakeProductCategory } from 'images'

import currencyFormatter from 'components/formatters/currencyFormatter'
import translate from 'translate'

export class ShoppingBagItem extends Component {
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
        const { strings, image, description, currency, price, qty, lang } = this.props

        return (
            <div className='row m-3 p-3 border shadow-sm jumbotron'>
                <div className='col-md-6'>
                    <img src={cakeProductCategory[image]} width={160} height={160} />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='row no-gutters'>{description}</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>{strings.price}: {currencyFormatter(lang, currency, price)}</div>

                            <div className='d-flex align-items-center'>
                                <div>{strings.qty}:</div>
                                <div className='btn-group' role='group'>
                                    <button type='button' className='btn btn-sm btn-primary' onClick={this.handleDecrementQty}>
                                        <i className='bi bi-chevron-left'></i>
                                    </button>

                                    <button type='button' className='btn btn-sm btn-primary'>
                                        {qty}
                                    </button>

                                    <button type='button' className='btn btn-sm btn-primary' onClick={this.handleIncrementQty}>
                                        <i className='bi bi-chevron-right'></i>
                                    </button>
                                </div>
                            </div>

                            <div>{strings.subtotal}: {currencyFormatter(lang, currency, qty * price)}</div>
                        </div>
                    </div>

                    <div className='row mt-2'>
                        <div className='col-md-12'>
                            <button
                                type='button'
                                className='btn btn-outline-primary btn-sm btn-block'
                                onClick={this.handleRemoveItem}
                            >
                                {strings.removeBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ShoppingBagItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    strings: PropTypes.object.isRequired,
    changeItemQtyFromShoppingCart: PropTypes.func.isRequired
}

ShoppingBagItem.defaultProps = {
    strings: {
        price: 'Price',
        qty: 'Qty',
        subtotal: 'Subtotal',
        removeBtn: 'Remove'
    }
}

export default translate('Pages.ShoppingBag.ShoppingBagItem')(ShoppingBagItem)