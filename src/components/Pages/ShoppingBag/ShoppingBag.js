import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ShoppingBagItem from './ShoppingBagItem'

const ShoppingBag = ({ items, removeItemFromShoppingCart, changeItemQtyFromShoppingCart }) => {
    const currency = items.length > 0 && items[0].currency
    let totalSum = 0

    items.forEach(v => {
        totalSum += v.qty * v.price
    })

    return (
        <div className='row no-gutters justify-content-center bg-light'>
            <div className='col-md-12'>
                <div className='row no-gutters'>
                    <div className='col-md-12 text-center bg-secondary text-white mb-3 display-4'>
                        Shopping bag
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
                                            description={v.description}
                                            currency={v.currency}
                                            price={v.price}
                                            qty={v.qty}
                                            removeItemFromShoppingCart={removeItemFromShoppingCart}
                                            changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
                                        />
                                    ))
                                }
                            </div>
                            <div className='col-lg-3 m-4 text-center'>
                                <h4>Summary</h4>
                                <h4>Total: {currency}{totalSum}</h4>
                                <Link to='/checkout' className='text-decoration-none'>
                                    <button type='button' className='btn btn-outline-success btn-block'>
                                        Checkout
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
                                <h3>Empty Bag</h3>
                                <h4>Your bag needs filling</h4>
                                <Link to='/' className='text-decoration-none'>
                                    <button type='button' className='btn btn-primary btn-block'>
                                        Continue Shopping
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
    items: PropTypes.array.isRequired,
    removeItemFromShoppingCart: PropTypes.func.isRequired,
    changeItemQtyFromShoppingCart: PropTypes.func.isRequired
}

export default ShoppingBag