import PromoDeal from './PromoDeal'
import { PromoDeals } from './PromoDeals'

describe('(Component) PromoDeals', () => {
    it('should render component', () => {
        const promoDeals = [
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

        const wrapper = shallow(<PromoDeals />)

        expect(wrapper.equals(
            <div>
                <div className='promo-deals-label mt-n2'>deals of the week</div>
                <div className='row promo-deals justify-content-center align-items-center m-5'>
                    <div className='d-flex justify-content-lg-center overflow-auto flex-nowrap'>
                        <div className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={promoDeals[0]} />
                        </div>
                        <div className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={promoDeals[1]} />
                        </div>
                        <div className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={promoDeals[2]} />
                        </div>
                        <div className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={promoDeals[3]} />
                        </div>
                        <div className='col-lg-2 mr-lg-4'>
                            <PromoDeal deal={promoDeals[4]} />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})