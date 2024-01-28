import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ShoppingBagItem from './ShoppingBagItem'
import currencyFormatter from 'components/formatters/currencyFormatter'

import './ShoppingBag.scss'

import translate from 'translate'

export const ShoppingBag = ({
    strings, items, lang,
    removeItemFromShoppingCart,
    changeItemQtyFromShoppingCart,
    clearItemsFromShoppingCart
}) => {
    const currency = items.length > 0 && items[0].currency[lang]
    let totalSum = 0

    items.forEach(v => {
        totalSum += v.qty * v.price
    })

    return (
        <div className='row no-gutters justify-content-center shopping-bag'>
            <div className='col-md-12'>
                <div className='row no-gutters'>
                    <div className='col-md-12 text-center display-4 shopping-bag-title text-secondary shadow position-fixed'>
                        {strings.shoppingBag}
                    </div>
                </div>

                {
                    items.length > 0 && (
                        <div className='row no-gutters justify-content-around mt-5'>
                            <div className='col-lg-5 m-2'>
                                {
                                    items.map(v => (
                                        <ShoppingBagItem
                                            key={v.id}
                                            id={v.id}
                                            image={v.image}
                                            name={v.name}
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
                            <div className='col-6 col-lg-3 m-5 m-lg-0 text-center'>
                                <div className='mt-5'>
                                    <h4>{strings.summary}</h4>
                                    <h4>{strings.total}: {currencyFormatter(lang, currency, totalSum)}</h4>
                                    <Link to='/checkout' className='text-decoration-none'>
                                        <button type='button' className='btn btn-outline-success btn-block'>
                                            {strings.checkoutBtn}
                                        </button>
                                    </Link>
                                    <Link to='/' className='text-decoration-none'>
                                        <button type='button' className='btn btn-outline-primary btn-block mt-3'>
                                            {strings.continueBtn}
                                        </button>
                                    </Link>
                                    <button type='button' className='btn btn-outline-danger btn-block mt-3 bi bi-trash' onClick={clearItemsFromShoppingCart}></button>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    !items.length && (
                        <div className='row no-gutters justify-content-center align-items-center vh-100'>
                            <div className='col-10 col-lg-5 text-center text-secondary border p-3 rounded bg-light shadow'>
                                <div className='display-1 bi bi-bag-fill text-success'></div>
                                <div className='display-4'>{strings.emptyBag}</div>
                                <div className='display-4'>{strings.fillingBag}</div>
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