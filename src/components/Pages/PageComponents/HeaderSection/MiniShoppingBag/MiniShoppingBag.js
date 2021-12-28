import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'
import ShoppingBagItems from './ShoppingBagItems'

import './MiniShoppingBag.scss'
import pluralsFormatter from 'components/formatters/pluralsFormatter'
import translate from 'translate'

export const MiniShoppingBag = ({ strings, lang, items, removeItemFromShoppingCart }) => {
    let itemsCount = 0

    items.forEach(v => {
        itemsCount += v.qty
    })

    if (!items.length) {
        return <ShoppingBagIcon count={itemsCount} />
    }

    return (
        <Tooltip
            placement='bottom'
            trigger={['hover']}
            overlay={
                <div>
                    <div className='d-flex justify-content-center'>
                        <div className='font-weight-bold text-dark mr-1'>{`${strings.bag}:`}</div>
                        <div className='font-weight-bold text-secondary'>
                            {`(${pluralsFormatter(itemsCount, strings.itemLabel)})`}
                        </div>
                    </div>

                    <ShoppingBagItems
                        items={items}
                        lang={lang}
                        removeItemFromShoppingCart={removeItemFromShoppingCart}
                    />

                    <div className='d-flex justify-content-around border-top p-2'>
                        <Link to='/shopping-bag'>
                            <button type='button' className='btn btn-outline-primary'>{strings.viewBag}</button>
                        </Link>

                        <Link to='/checkout'>
                            <button type='button' className='btn btn-outline-success'>{strings.checkoutBtn}</button>
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

MiniShoppingBag.propTypes = {
    items: PropTypes.array.isRequired,
    strings: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
}

MiniShoppingBag.defaultProps = {
    strings: {
        bag: 'Bag',
        viewBag: 'View Bag',
        checkoutBtn: 'Checkout',
        itemLabel: {
            value: 'item',
            plural: 's'
        }
    }
}

export default translate('Pages.PageComponents.HeaderSection.MiniShoppingBag')(MiniShoppingBag)