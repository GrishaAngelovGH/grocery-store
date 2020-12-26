import PropTypes from 'prop-types'

import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'
import ShoppingBagItems from './ShoppingBagItems'

import './ShoppingBag.scss'

const ShoppingBag = ({ items }) => {
    let itemsCount = 0

    items.forEach(v => {
        itemsCount += v.qty
    })

    return (
        <Tooltip
            placement='bottom'
            trigger={['hover']}
            overlay={<ShoppingBagItems items={items} />}
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