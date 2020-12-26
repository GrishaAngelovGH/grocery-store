import Tooltip from 'rc-tooltip'
import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

import ShoppingBag from './ShoppingBag'
import ShoppingBagItems from './ShoppingBagItems'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const items = ['item1', 'item2']
        const wrapper = shallow(<ShoppingBag items={items} />)

        expect(wrapper.equals(
            <Tooltip
                placement='bottom'
                trigger={['hover']}
                overlay={<ShoppingBagItems items={items} />}
            >
                <div>
                    <ShoppingBagIcon count={2} />
                </div>
            </Tooltip>
        )).to.equal(true)
    })
})