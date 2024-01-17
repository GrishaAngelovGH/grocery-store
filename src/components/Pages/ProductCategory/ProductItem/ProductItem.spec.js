import { Link } from 'react-router-dom'

import { cakeProductCategory } from 'images'

import ReactStars from 'react-stars'

import Button from 'react-bootstrap/Button'

import { ProductItem } from './ProductItem'

import ProductModal from 'components/Pages/ProductCategory/ProductModal'
import ProductDescription from './ProductDescription'
import ClubcardPromoPrice from './ClubcardPromoPrice'

describe('(Component) ProductItem', () => {
    let wrapper, addItemToShoppingCart

    const item = {
        id: 1,
        image: 'tripleLayerCake',
        imageLabel: { en: 'label' },
        name: { en: 'Triple Layer Cake' },
        description: { en: 'description' },
        currency: { en: '£' },
        price: 30.00,
        rating: 4
    }

    beforeEach(() => {
        addItemToShoppingCart = sinon.spy()

        wrapper = shallow(
            <ProductItem
                id={item.id}
                categoryId={'category-1'}
                addItemToShoppingCart={addItemToShoppingCart}
                image={item.image}
                imageLabel={item.imageLabel}
                name={item.name}
                description={item.description}
                currency={item.currency}
                price={item.price}
                rating={item.rating}
                lang={'en'}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='m-5 border bg-light rounded shadow p-1'>
                <div className='d-flex align-items-end position-relative'>
                    <span className='promo-img-label rounded'>label</span>
                    <img
                        role='button'
                        src={cakeProductCategory['tripleLayerCake']}
                        width={250}
                        height={300}
                        className='rounded'
                        data-toggle='modal'
                        data-target='#product-modal-triple-layer-cake'
                    />
                    <ProductDescription />
                </div>

                <div className='row align-items-center product-container'>
                    <div className='col-10'>
                        <div className='text-break'>Triple Layer Cake</div>

                        <div>{`£${30.00}`}</div>
                    </div>

                    <div className='col-2 pl-0'>
                        <Link to='/comments/category-1/1'>
                            <i className='bi bi-chat-right-dots h2'></i>
                        </Link>
                    </div>
                </div>

                <ClubcardPromoPrice
                    currency={{ en: '£' }}
                    lang='en'
                    price={30.00}
                    discountPercent={5}
                />

                <ReactStars
                    count={5}
                    edit={false}
                    value={4}
                    size={24}
                    color2={'#ffd700'}
                    className='d-flex justify-content-center'
                />

                <Button
                    variant='success'
                    onClick={wrapper.instance().handleAddToCartClick}
                    className='btn-block'
                >
                    Add To Bag
                </Button>

                <ProductModal
                    image={cakeProductCategory['tripleLayerCake']}
                    name='Triple Layer Cake'
                    description='description'
                />
            </div>
        )).to.equal(true)
    })

    it('should handle add to cart click', () => {
        const button = wrapper.find('Button')

        button.simulate('click')

        addItemToShoppingCart.should.have.been.calledOnce
        addItemToShoppingCart.should.have.been.calledWith({
            id: 1,
            image: 'tripleLayerCake',
            name: { en: 'Triple Layer Cake' },
            currency: { en: '£' },
            price: 30.00,
            qty: 1
        })
    })
})