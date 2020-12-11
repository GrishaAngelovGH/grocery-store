import { shoppingBanner } from 'images'
import './FreeShoppingBanner.scss'

const FreeShoppingBanner = () => (
    <div className='row no-gutters mb-2'>
        <div className='col-md-12 d-flex justify-content-center align-items-center'>
            <div className='free-shopping-banner-label'>
                <h2>12 DAYS OF GIVEAWAYS</h2>
                <h3>FREE SHOPPING FOR 50 SPARKS CUSTOMERS EVERY DAY</h3>
                <h3>Find out more </h3>
            </div>
            <img src={shoppingBanner} className='w-100 shopping-banner' />
        </div>
    </div>
)

export default FreeShoppingBanner