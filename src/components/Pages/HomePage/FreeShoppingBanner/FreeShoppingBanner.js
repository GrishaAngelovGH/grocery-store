import PropTypes from 'prop-types'
import { shoppingBanner } from 'images'
import './FreeShoppingBanner.scss'

import translate from 'translate'

export const FreeShoppingBanner = ({ strings }) => (
    <div className='row no-gutters mb-2'>
        <div className='col-md-12 d-flex justify-content-center align-items-center'>
            <div className='free-shopping-banner-label'>
                <h2>{strings.title}</h2>
                <h3>{strings.content}</h3>
                <h3>{strings.linkText}</h3>
            </div>
            <img src={shoppingBanner} className='w-100 shopping-banner' />
        </div>
    </div>
)

FreeShoppingBanner.propTypes = {
    strings: PropTypes.object.isRequired
}

FreeShoppingBanner.defaultProps = {
    strings: {
        title: '12 DAYS OF GIVEAWAYS',
        content: 'FREE SHOPPING FOR 50 SPARKS CUSTOMERS EVERY DAY',
        linkText: 'Find out more'
    }
}

export default translate('Pages.HomePage.FreeShoppingBanner')(FreeShoppingBanner)