import { Link } from 'react-router-dom'

import ShoppingBagItem from './ShoppingBagItem'
import ShoppingBag from './ShoppingBag'

describe('(Component) ShoppingBag', () => {
    it('should render component', () => {
        const items = [
            {
                id: 1,
                image: 'triple-layer-cake',
                description: 'description-1',
                currency: '£',
                price: 30.00,
                qty: 1
            },
            {
                id: 2,
                image: 'vanilla-cake',
                description: 'description-2',
                currency: '£',
                price: 35.00,
                qty: 2
            }
        ]

        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <ShoppingBag
                items={items}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center bg-light'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12 text-center bg-secondary text-white mb-3 display-4'>
                            Shopping bag
                        </div>
                    </div>

                    <div className='row no-gutters justify-content-around'>
                        <div className='col-lg-5 m-2'>
                            <ShoppingBagItem
                                id={items[0].id}
                                image={items[0].image}
                                description={items[0].description}
                                currency={items[0].currency}
                                price={items[0].price}
                                qty={items[0].qty}
                                removeItemFromShoppingCart={removeItemFromShoppingCart}
                            />
                            <ShoppingBagItem
                                id={items[1].id}
                                image={items[1].image}
                                description={items[1].description}
                                currency={items[1].currency}
                                price={items[1].price}
                                qty={items[1].qty}
                                removeItemFromShoppingCart={removeItemFromShoppingCart}
                            />
                        </div>
                        <div className='col-lg-3 m-4 text-center'>
                            <h4>Summary</h4>
                            <h4>Total: {'£'}{100}</h4>
                            <Link to='/checkout'>
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
})