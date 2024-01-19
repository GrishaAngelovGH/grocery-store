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
        const { strings, image, name, currency, price, qty, lang } = this.props

        return (
            <div className='row m-3 mt-5 p-3 border shadow-sm jumbotron justify-content-center'>
                <div className='col-md-6 text-center mb-3'>
                    <img src={cakeProductCategory[image]} width={160} height={160} className='rounded' />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='text-secondary text-center'>{name[lang]}</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>{strings.price}: {currencyFormatter(lang, currency, price)}</div>

                            <div className='d-flex align-items-center'>
                                <div>{strings.qty}:</div>
                                <div className='btn-group mx-2' role='group'>
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
    name: PropTypes.object.isRequired,
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