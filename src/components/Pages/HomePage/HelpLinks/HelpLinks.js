import PropTypes from 'prop-types'
import translate from 'translate'

export const HelpLinks = ({ strings }) => (
    <div className='row no-gutters justify-content-center border d-none d-md-flex mt-2'>
        <div role='button' className='col-4 col-md-3 small'>
            {strings.homeDelivery}
        </div>
        <div role='button' className='col-4 col-md-3 small'>
            {strings.order}
        </div>
        <div role='button' className='col-4 col-md-3 small'>
            {strings.shop}
        </div>
    </div>
)

HelpLinks.propTypes = {
    strings: PropTypes.object.isRequired
}

HelpLinks.defaultProps = {
    strings: {
        homeDelivery: 'Free home delivery when you spend over £50',
        order: 'Order by 8pm for next-day delivery for £4.99',
        shop: 'Shop with confidence with our extended returns policy'
    }
}

export default translate('Pages.HomePage.HelpLinks')(HelpLinks)