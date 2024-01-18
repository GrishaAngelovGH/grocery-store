import PropTypes from 'prop-types'
import { Component } from 'react'

import { cakeProductCategory } from 'images'
import currencyFormatter from 'components/formatters/currencyFormatter'

import translate from 'translate'

export class ShoppingBagItem extends Component {
    handleRemoveItem = () => {
        const { id, removeItemFromShoppingCart } = this.props

        removeItemFromShoppingCart(id)
    }

    render() {
        const { strings, lang, image, name, currency, price, qty } = this.props

        return (
            <div className='row no-gutters p-3 border-top bg-light justify-content-around'>
                <div className='col-5'>
                    <img src={cakeProductCategory[image]} width={120} height={120} className='rounded' />
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='font-weight-bold'>{name}</div>
                        <div className='bg-info text-white rounded w-100'>{currencyFormatter(lang, currency, price)}</div>
                        <div className='bg-info text-white rounded w-100 mt-1'>{strings.qty}: {qty}</div>
                        <button onClick={this.handleRemoveItem} className='btn btn-danger bi bi-trash mt-1 p-1 rounded-circle d-flex'></button>
                    </div>
                </div>
            </div>
        )
    }
}

ShoppingBagItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    strings: PropTypes.object.isRequired
}

ShoppingBagItem.defaultProps = {
    strings: {
        qty: 'Qty'
    }
}

export default translate('Pages.PageComponents.HeaderSection.MiniShoppingBag.ShoppingBagItems.ShoppingBagItem')(ShoppingBagItem)