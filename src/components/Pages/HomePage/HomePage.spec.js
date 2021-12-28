import {
    groceryStoreBanner
} from 'images'

import HeaderSection from '../PageComponents/HeaderSection'

import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts from './PromoProducts'
import PromoDeals from './PromoDeals'
import HelpLinks from './HelpLinks'

import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection disabledSearch />

                    <HelpLinks />

                    <img src={groceryStoreBanner} className='img-fluid w-100 mt-2' />

                    <div className='row no-gutters justify-content-around text-center m-2'>
                        <div className='col-md-3'>
                            <DeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <NextDayDeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <ReturnDeliveryButton />
                        </div>
                    </div>

                    <FreeShoppingBanner />

                    <PromoProducts />

                    <PromoDeals />
                </div>
            </div>
        )).to.equal(true)
    })
})