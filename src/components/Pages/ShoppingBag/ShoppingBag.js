import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ShoppingBagItem from './ShoppingBagItem'
import currencyFormatter from 'components/formatters/currencyFormatter'
import translate from 'translate'

export const ShoppingBag = ({ strings, items, lang, removeItemFromShoppingCart, changeItemQtyFromShoppingCart }) => {
    const currency = items.length > 0 && items[0].currency[lang]
    let totalSum = 0

    items.forEach(v => {
        totalSum += v.qty * v.price
    })

    return (
        <div className='row no-gutters justify-content-center bg-light'>
            <div className='col-md-12'>
                <div className='row no-gutters'>
                    <div className='col-md-12 text-center bg-primary text-white mb-3 display-4'>
                        {strings.shoppingBag}
                    </div>
                </div>

                {
                    items.length > 0 && (
                        <div className='row no-gutters justify-content-around'>
                            <div className='col-lg-5 m-2'>
                                {
                                    items.map(v => (
                                        <ShoppingBagItem
                                            key={v.id}
                                            id={v.id}
                                            image={v.image}
                                            description={v.description[lang]}
                                            currency={v.currency[lang]}
                                            price={v.price}
                                            qty={v.qty}
                                            lang={lang}
                                            removeItemFromShoppingCart={removeItemFromShoppingCart}
                                            changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
                                        />
                                    ))
                                }
                            </div>
                            <div className='col-lg-3 m-4 text-center'>
                                <h4>{strings.summary}</h4>
                                <h4>{strings.total}: {currencyFormatter(lang, currency, totalSum)}</h4>
                                <Link to='/checkout' className='text-decoration-none'>
                                    <button type='button' className='btn btn-outline-success btn-block'>
                                        {strings.checkoutBtn}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                }

                {
                    !items.length && (
                        <div className='row no-gutters justify-content-center'>
                            <div className='col-8 col-lg-5 text-center'>
                                <h3>{strings.emptyBag}</h3>
                                <h4>{strings.fillingBag}</h4>
                                <Link to='/' className='text-decoration-none'>
                                    <button type='button' className='btn btn-primary btn-block'>
                                        {strings.continueBtn}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

ShoppingBag.propTypes = {
    strings: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    removeItemFromShoppingCart: PropTypes.func.isRequired,
    changeItemQtyFromShoppingCart: PropTypes.func.isRequired
}

ShoppingBag.defaultProps = {
    strings: {
        shoppingBag: 'Shopping bag',
        summary: 'Summary',
        total: 'Total',
        checkoutBtn: 'Checkout',
        emptyBag: 'Empty Bag',
        fillingBag: 'Your bag needs filling',
        continueBtn: 'Continue Shopping'
    }
}

export default translate('Pages.ShoppingBag')(ShoppingBag)