import { Link } from 'react-router-dom'

import ShoppingBagItem from './ShoppingBagItem'
import { ShoppingBag } from './ShoppingBag'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const items = [
            {
                id: 1,
                image: 'tripleLayerCake',
                name: { en: 'Triple Layer Cake' },
                currency: { en: '£' },
                price: 30.00,
                qty: 1
            },
            {
                id: 2,
                image: 'vanillaCake',
                name: { en: 'Vanilla Cake' },
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
            <div className='row no-gutters justify-content-center shopping-bag'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12 text-center display-4 shopping-bag-title text-secondary shadow position-fixed'>
                            Shopping bag
                        </div>
                    </div>

                    <div className='row no-gutters justify-content-around mt-5'>
                        <div className='col-lg-5 m-2'>
                            <ShoppingBagItem
                                id={items[0].id}
                                image={items[0].image}
                                name={items[0].name}
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
                                name={items[1].name}
                                currency={items[1].currency['en']}
                                price={items[1].price}
                                qty={items[1].qty}
                                lang={'en'}
                                removeItemFromShoppingCart={removeItemFromShoppingCart}
                                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
                            />
                        </div>
                        <div className='col-6 col-lg-3 m-5 m-lg-0 text-center'>
                            <div className='mt-5'>
                                <h4>Summary</h4>
                                <h4>Total: {'£'}{100}</h4>
                                <Link to='/checkout' className='text-decoration-none'>
                                    <button type='button' className='btn btn-outline-success btn-block'>
                                        Checkout
                                    </button>
                                </Link>
                                <Link to='/' className='text-decoration-none'>
                                    <button type='button' className='btn btn-outline-primary btn-block mt-3'>
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
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
            <div className='row no-gutters justify-content-center shopping-bag'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12 text-center display-4 shopping-bag-title text-secondary shadow position-fixed'>
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