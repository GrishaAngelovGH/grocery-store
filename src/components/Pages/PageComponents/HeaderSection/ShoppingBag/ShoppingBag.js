import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'
import ShoppingBagItems from './ShoppingBagItems'

import './ShoppingBag.scss'

const ShoppingBag = ({ items, removeItemFromShoppingCart }) => {
    let itemsCount = 0

    items.forEach(v => {
        itemsCount += v.qty
    })

    return (
        <Tooltip
            placement='bottom'
            trigger={['hover']}
            overlay={
                <div>
                    <ShoppingBagItems
                        items={items}
                        removeItemFromShoppingCart={removeItemFromShoppingCart}
                    />

                    <div className='d-flex justify-content-around border-top p-2'>
                        <Link to='/shopping-bag'>
                            <button type='button' className='btn btn-outline-primary'>View Bag</button>
                        </Link>

                        <Link to='/checkout'>
                            <button type='button' className='btn btn-outline-success'>Checkout</button>
                        </Link>
                    </div>
                </div>
            }
        >
            <div>
                <ShoppingBagIcon count={itemsCount} />
            </div>
        </Tooltip>
    )
}

ShoppingBag.propTypes = {
    items: PropTypes.array.isRequired
}

export default ShoppingBag