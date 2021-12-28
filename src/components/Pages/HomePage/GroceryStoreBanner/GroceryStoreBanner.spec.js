import GroceryStoreBanner from './GroceryStoreBanner'

import {
    groceryStoreBanner
} from 'images'

describe('(Component) GroceryStoreBanner', () => {
    it('should render component', () => {
        const wrapper = shallow(<GroceryStoreBanner />)

        expect(wrapper.equals(
            <img src={groceryStoreBanner} className='img-fluid w-100 mt-2' />
        )).to.equal(true)
    })
})