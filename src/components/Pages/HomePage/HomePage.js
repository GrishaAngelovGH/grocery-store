import {
    groceryStoreBanner
} from 'images'

import HeaderSection from '../PageComponents/HeaderSection'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts, { promoProductItems } from './PromoProducts'
import PromoDeals, { promoDealItems } from './PromoDeals'
import HelpLinks from './HelpLinks'
import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

const HomePage = () => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <HeaderSection disabledSearch />

            <HelpLinks />

            <img src={groceryStoreBanner} className='img-fluid w-100 mt-2' />

            <div className='row no-gutters justify-content-around m-2'>
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

            <PromoProducts products={promoProductItems} />

            <PromoDeals promoDeals={promoDealItems} />
        </div>
    </div>
)

export default HomePage