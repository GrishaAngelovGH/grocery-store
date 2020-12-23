import { cakeProductCategory } from 'images'
import ReactStars from 'react-stars'

import ProductItem from './ProductItem'

describe('(Component) ProductItem', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <ProductItem
                image={'triple-layer-cake'}
                imageLabel={'label'}
                description={'description'}
                price={'£30.00'}
                rating={4}
            />
        )

        expect(wrapper.equals(
            <div className='m-3'>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>label</span>
                    <img src={cakeProductCategory['triple-layer-cake']} width={250} height={300} />
                </div>

                <div>description</div>

                <div>£30.00</div>

                <ReactStars
                    count={5}
                    edit={false}
                    value={4}
                    size={24}
                    color2={'#ffd700'}
                />

                <button type='button' className='btn btn-success btn-block'>
                    Add To Bag
        </button>
            </div>
        )).to.equal(true)
    })
})