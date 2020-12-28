import { cakeProductCategory } from 'images'
import ReactStars from 'react-stars'

import ProductItem from './ProductItem'

describe('(Component) ProductItem', () => {
    let wrapper, addItemToShoppingCart

    beforeEach(() => {
        addItemToShoppingCart = sinon.spy()

        wrapper = shallow(
            <ProductItem
                id={1}
                addItemToShoppingCart={addItemToShoppingCart}
                image={'triple-layer-cake'}
                imageLabel={'label'}
                description={'description'}
                currency={'£'}
                price={30.00}
                rating={4}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='m-3'>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>label</span>
                    <img src={cakeProductCategory['triple-layer-cake']} width={250} height={300} />
                </div>

                <div>description</div>

                <div>{`£${30.00}`}</div>

                <ReactStars
                    count={5}
                    edit={false}
                    value={4}
                    size={24}
                    color2={'#ffd700'}
                />

                <button
                    type='button'
                    onClick={wrapper.instance().handleAddToCartClick}
                    className='btn btn-success btn-block'
                >
                    Add To Bag
                </button>
            </div>
        )).to.equal(true)
    })

    it('should handle add to cart click', () => {
        const button = wrapper.find('button')

        button.simulate('click')

        addItemToShoppingCart.should.have.been.calledOnce
        addItemToShoppingCart.should.have.been.calledWith({
            id: 1,
            description: 'description',
            image: 'triple-layer-cake',
            currency: '£',
            price: 30.00,
            qty: 1
        })
    })
})