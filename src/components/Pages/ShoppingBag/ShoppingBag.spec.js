import { Link } from 'react-router-dom'

import ShoppingBagItem from './ShoppingBagItem'
import { ShoppingBag } from './ShoppingBag'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const items = [
            {
                id: 1,
                image: 'triple-layer-cake',
                description: { en: 'description-1' },
                currency: { en: '£' },
                price: 30.00,
                qty: 1
            },
            {
                id: 2,
                image: 'vanilla-cake',
                description: { en: 'description-2' },
                currency: { en: '£' },
                price: 35.00,
                qty: 2
            }
        ]

        const removeItemFromShoppingCart = sinon.spy()
        const changeItemQtyFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <ShoppingBag
                lang={'en'}
                items={items}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center bg-light'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12 text-center bg-primary text-white mb-3 display-4'>
                            Shopping bag
                        </div>
                    </div>

                    <div className='row no-gutters justify-content-around'>
                        <div className='col-lg-5 m-2'>
                            <ShoppingBagItem
                                id={items[0].id}
                                image={items[0].image}
                                description={items[0].description['en']}
                                currency={items[0].currency['en']}
                                price={items[0].price}
                                qty={items[0].qty}
                                lang={'en'}
                                removeItemFromShoppingCart={removeItemFromShoppingCart}
                                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
                            />
                            <ShoppingBagItem
                                id={items[1].id}
                                image={items[1].image}
                                description={items[1].description['en']}
                                currency={items[1].currency['en']}
                                price={items[1].price}
                                qty={items[1].qty}
                                lang={'en'}
                                removeItemFromShoppingCart={removeItemFromShoppingCart}
                                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
                            />
                        </div>
                        <div className='col-lg-3 m-4 text-center'>
                            <h4>Summary</h4>
                            <h4>Total: {'£'}{100}</h4>
                            <Link to='/checkout' className='text-decoration-none'>
                                <button type='button' className='btn btn-outline-success btn-block'>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )).to.equal(true)
    })

    it('should render empty bag', () => {
        const removeItemFromShoppingCart = sinon.spy()
        const changeItemQtyFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <ShoppingBag
                lang={'en'}
                items={[]}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center bg-light'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12 text-center bg-primary text-white mb-3 display-4'>
                            Shopping bag
                        </div>
                    </div>

                    <div className='row no-gutters justify-content-center'>
                        <div className='col-8 col-lg-5 text-center'>
                            <h3>Empty Bag</h3>
                            <h4>Your bag needs filling</h4>
                            <Link to='/' className='text-decoration-none'>
                                <button type='button' className='btn btn-primary btn-block'>
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})