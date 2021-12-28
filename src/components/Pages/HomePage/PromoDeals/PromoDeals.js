import PropTypes from 'prop-types'
import PromoDeal from './PromoDeal'

import './PromoDeals.scss'
import translate from 'translate'

export const PromoDeals = ({ strings }) => (
    <div>
        <div className='promo-deals-label mt-n2'>{strings.label}</div>
        <div className='row promo-deals justify-content-center align-items-center m-5'>

            <div className='d-flex justify-content-lg-center overflow-auto flex-nowrap'>
                {
                    strings.deals.map((v, i) => (
                        <div key={i} className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={v} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

PromoDeals.propTypes = {
    strings: PropTypes.object.isRequired
}

PromoDeals.defaultProps = {
    strings: {
        label: 'deals of the week',
        deals: [
            {
                category: 'offers',
                description: 'see all offers',
                linkTitle: 'Shop now'
            },
            {
                category: 'women',
                description: '30% off selected womenswear',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'lingerie',
                description: '30% off selected nightwear',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'men',
                description: '2 for £60 on lambswool jumpers',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'women',
                description: '30% of boots',
                linkTitle: 'Shop the offer'
            }
        ]
    }
}

export default translate('Pages.HomePage.PromoDeals')(PromoDeals)