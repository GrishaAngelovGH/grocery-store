import IntroSteps from 'components/IntroSteps'
import HeaderSection from 'components/Pages/PageComponents/HeaderSection'

import FreeShoppingBanner from './FreeShoppingBanner'
import GroceryStoreBanner from './GroceryStoreBanner'
import HelpButtons from './HelpButtons'
import HelpLinks from './HelpLinks'
import PromoDeals from './PromoDeals'
import PromoProducts from './PromoProducts'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <IntroSteps />

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