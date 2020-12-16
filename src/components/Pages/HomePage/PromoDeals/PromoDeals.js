import PromoDeal from './PromoDeal'

import './PromoDeals.scss'

const PromoDeals = ({ promoDeals }) => (
    <div>
        <div className='promo-deals-label mt-n2'>deals of the week</div>
        <div className='row promo-deals justify-content-center align-items-center m-5'>

            <div className='d-flex justify-content-lg-center overflow-auto flex-nowrap'>
                {
                    promoDeals.map((v, i) => (
                        <div key={i} className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={v} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

export default PromoDeals