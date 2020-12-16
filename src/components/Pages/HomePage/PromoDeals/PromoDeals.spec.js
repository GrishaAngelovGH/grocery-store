import PromoDeal from './PromoDeal'
import PromoDeals from './PromoDeals'

describe('(Component) PromoDeals', () => {
    it('should render component', () => {
        const promoDeals = [
            {
                category: 'category1',
                description: 'description1',
                linkTitle: 'linkTitle1'
            },
            {
                category: 'category2',
                description: 'description2',
                linkTitle: 'linkTitle2'
            }
        ]

        const wrapper = shallow(<PromoDeals promoDeals={promoDeals} />)

        expect(wrapper.equals(
            <div className='row promo-deals justify-content-center align-items-center m-5'>
                <div className='d-flex justify-content-lg-center overflow-auto flex-nowrap'>
                    <div className='col-lg-2 mr-lg-4'>
                        <PromoDeal deal={promoDeals[0]} />
                    </div>
                    <div className='col-lg-2 mr-lg-4'>
                        <PromoDeal deal={promoDeals[1]} />
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})