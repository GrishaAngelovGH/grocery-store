import { Link } from 'react-router-dom'

import Tooltip from 'rc-tooltip'
import { ShoppingBag as ShoppingBagIcon } from 'components/Icons'

import ShoppingBagItems from './ShoppingBagItems'
import MiniShoppingBag from './MiniShoppingBag'

describe('(Component) MiniShoppingBag', () => {
    it('should render component with provided items', () => {
        const items = [{ qty: 1 }, { qty: 2 }]
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={items}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <Tooltip
                placement='bottom'
                trigger={['hover']}
                overlay={
                    <div>
                        <ShoppingBagItems
                            items={items}
                            removeItemFromShoppingCart={removeItemFromShoppingCart}
                        />
                        <div className='d-flex justify-content-around border-top p-2'>
                            <Link to='/shopping-bag'>
                                <button type='button' className='btn btn-outline-primary'>View Bag</button>
                            </Link>

                            <Link to='/checkout'>
                                <button type='button' className='btn btn-outline-success'>Checkout</button>
                            </Link>
                        </div>
                    </div>
                }
            >
                <div>
                    <ShoppingBagIcon count={3} />
                </div>
            </Tooltip>
        )).to.equal(true)
    })

    it('should render component without items', () => {
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={[]}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <ShoppingBagIcon count={0} />
        )).to.equal(true)
    })
})