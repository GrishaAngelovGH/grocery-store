import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

import ShoppingBag from './ShoppingBag'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const wrapper = shallow(<ShoppingBag items={['item1', 'item2']} />)

        expect(wrapper.equals(
            <ShoppingBagIcon count={2} />
        )).to.equal(true)
    })
})