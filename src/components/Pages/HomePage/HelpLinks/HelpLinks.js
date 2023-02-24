import PropTypes from 'prop-types'
import translate from 'translate'

export const HelpLinks = ({ strings: { homeDelivery, order, shop } }) => {
    const descriptions = [homeDelivery, order, shop]

    return (
        <div className='row no-gutters justify-content-center text-center border d-none d-md-flex mt-2'>
            {
                descriptions.map((v => (
                    <div key={v} role='button' className='col-4 small font-weight-bold'>
                        {v}
                    </div>
                )))
            }
        </div>
    )
}

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