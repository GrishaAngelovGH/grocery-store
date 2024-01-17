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
            <div className='d-flex p-3'>
                <img src={cakeProductCategory[image]} width={120} height={120} className='rounded' />

                <div className='d-flex flex-column justify-content-around ml-3 font-weight-bold w-100'>
                    <div>{name}</div>
                    <div>{currencyFormatter(lang, currency, price)}</div>

                    <div className='d-flex flex-column font-weight-bold mt-3'>
                        <div>{strings.qty}: {qty}</div>
                        <button onClick={this.handleRemoveItem} type='button' className='btn btn-outline-primary btn-sm'>
                            {strings.removeBtn}
                        </button>
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
        qty: 'Qty',
        removeBtn: 'Remove'
    }
}

export default translate('Pages.PageComponents.HeaderSection.MiniShoppingBag.ShoppingBagItems.ShoppingBagItem')(ShoppingBagItem)