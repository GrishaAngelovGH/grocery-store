import PropTypes from 'prop-types'

import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

const ShoppingBag = ({ items }) => (
    <ShoppingBagIcon count={items.length} />
)

ShoppingBag.propTypes = {
    items: PropTypes.array.isRequired
}

export default ShoppingBag