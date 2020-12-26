import PropTypes from 'prop-types'

import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

import './ShoppingBag.scss'

import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

const ShoppingBag = ({ items }) => (
    <Tooltip
        placement='bottom'
        trigger={['hover']}
        overlay={<div>content</div>}
    >
        <div>
            <ShoppingBagIcon count={items.length} />
        </div>
    </Tooltip>
)

ShoppingBag.propTypes = {
    items: PropTypes.array.isRequired
}

export default ShoppingBag