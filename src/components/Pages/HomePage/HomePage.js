import IntroSteps from 'components/IntroSteps'
import HeaderSection from 'components/Pages/PageComponents/HeaderSection'

import FreeShoppingBanner from './FreeShoppingBanner'
import GroceryStoreBanner from './GroceryStoreBanner'
import HelpButtons from './HelpButtons'
import HelpLinks from './HelpLinks'
import PromoDeals from './PromoDeals'
import PromoProducts from './PromoProducts'

const HomePage = () => (
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
)

export default HomePage