import PropTypes from 'prop-types'

import ShoppingBagItem from './ShoppingBagItem'

const ShoppingBag = ({ items, removeItemFromShoppingCart }) => (
    <div className='row no-gutters justify-content-center bg-light'>
        <div className='col-md-12'>
            <div className='row no-gutters'>
                <div className='col-md-12 text-center bg-secondary text-white mb-3 display-4'>
                    Shopping bag
                </div>
            </div>

            <div className='row no-gutters'>
                <div className='col-md-12 col-lg-5 m-2'>
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
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)

ShoppingBag.propTypes = {
    items: PropTypes.array.isRequired,
    removeItemFromShoppingCart: PropTypes.func.isRequired
}

export default ShoppingBag