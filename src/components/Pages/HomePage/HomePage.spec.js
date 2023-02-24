import HeaderSection from '../PageComponents/HeaderSection'
import GroceryStoreBanner from './GroceryStoreBanner'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts from './PromoProducts'
import PromoDeals from './PromoDeals'
import HelpLinks from './HelpLinks'
import HelpButtons from './HelpButtons'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection disabledSearch />

                    <HelpLinks />

                    <GroceryStoreBanner />

                    <HelpButtons />

                    <FreeShoppingBanner />

                    <PromoProducts />

                    <PromoDeals />
                </div>
            </div>
        )).to.equal(true)
    })
})