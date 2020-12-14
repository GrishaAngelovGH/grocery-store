import { shallow } from 'enzyme'
import PromoProduct from './PromoProduct'

describe('(Component) PromoProduct', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <PromoProduct
                image='image'
                imageLabel='imageLabel'
                description='description'
                linkTitle='linkTitle'
            />
        )

        expect(wrapper.equals(
            <div>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>imageLabel</span>
                    <img src={'image'} width={350} height={300} />
                </div>
                <div>description</div>
                <div role='button' className='small font-weight-bold'>linkTitle</div>
            </div>
        )).to.equal(true)
    })
})