import Tooltip from 'rc-tooltip'
import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

import ShoppingBag from './ShoppingBag'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const wrapper = shallow(<ShoppingBag items={['item1', 'item2']} />)

        expect(wrapper.equals(
            <Tooltip
                placement='bottom'
                trigger={['hover']}
                overlay={<div>content</div>}
            >
                <div>
                    <ShoppingBagIcon count={2} />
                </div>
            </Tooltip>
        )).to.equal(true)
    })
})