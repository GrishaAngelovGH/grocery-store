import { Link } from 'react-router-dom'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { ShoppingBag as ShoppingBagIcon, Delete } from 'components/Icons'

import ShoppingBagItems from './ShoppingBagItems'
import { MiniShoppingBag } from './MiniShoppingBag'

describe('(Component) MiniShoppingBag', () => {
    it('should render component with ShoppingBagIcon', () => {
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={[]}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <ShoppingBagIcon count={0} />
        )).to.equal(true)
    })

    it('should render component with provided items', () => {
        const items = [{ qty: 1 }, { qty: 2 }]
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={items}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        wrapper.find(OverlayTrigger).simulate('toggle', true)

        expect(wrapper.equals(
            <OverlayTrigger
                show={true}
                placement={'bottom'}
                delay={{ show: 250 }}
                onToggle={wrapper.instance().handleToggle}
                overlay={(
                    <Tooltip>
                        <div className='row justify-content-center'>
                            <div className='col-md-10'>
                                <span className='font-weight-bold text-dark mr-1'>Bag:</span>
                                <span className='font-weight-bold text-secondary'>
                                    (3 items)
                                </span>
                            </div>
                            <div className='col-md-1'>
                                <span className='text-dark' role={'button'}>
                                    <Delete onClick={wrapper.instance().handleCloseButtonClick} />
                                </span>
                            </div>
                        </div>

                        <ShoppingBagItems
                            items={items}
                            lang={'en'}
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
                    </Tooltip>
                )}
            >
                <div role={'button'}>
                    <ShoppingBagIcon count={3} />
                </div>
            </OverlayTrigger>
        )).to.equal(true)
    })

    it('should render component with one item', () => {
        const items = [{ qty: 1 }]
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={items}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        wrapper.find(OverlayTrigger).simulate('toggle', true)

        expect(wrapper.equals(
            <OverlayTrigger
                show={true}
                placement={'bottom'}
                delay={{ show: 250 }}
                onToggle={wrapper.instance().handleToggle}
                overlay={(
                    <Tooltip>
                        <div className='row justify-content-center'>
                            <div className='col-md-10'>
                                <span className='font-weight-bold text-dark mr-1'>Bag:</span>
                                <span className='font-weight-bold text-secondary'>
                                    (1 item)
                                </span>
                            </div>
                            <div className='col-md-1'>
                                <span className='text-dark' role={'button'}>
                                    <Delete onClick={wrapper.instance().handleCloseButtonClick} />
                                </span>
                            </div>
                        </div>

                        <ShoppingBagItems
                            items={items}
                            lang={'en'}
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
                    </Tooltip>
                )}
            >
                <div role={'button'}>
                    <ShoppingBagIcon count={1} />
                </div>
            </OverlayTrigger>
        )).to.equal(true)
    })

    it('should close shopping bag when click on close button', () => {
        const items = [{ qty: 1 }, { qty: 2 }]
        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <MiniShoppingBag
                items={items}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        wrapper.find(OverlayTrigger).simulate('toggle', true)

        wrapper.find(OverlayTrigger).dive().find(Delete).simulate('click')

        expect(wrapper.equals(
            <OverlayTrigger
                show={false}
                placement={'bottom'}
                delay={{ show: 250 }}
                onToggle={wrapper.instance().handleToggle}
                overlay={(
                    <Tooltip>
                        <div className='row justify-content-center'>
                            <div className='col-md-10'>
                                <span className='font-weight-bold text-dark mr-1'>Bag:</span>
                                <span className='font-weight-bold text-secondary'>
                                    (3 items)
                                </span>
                            </div>
                            <div className='col-md-1'>
                                <span className='text-dark' role={'button'}>
                                    <Delete onClick={wrapper.instance().handleCloseButtonClick} />
                                </span>
                            </div>
                        </div>

                        <ShoppingBagItems
                            items={items}
                            lang={'en'}
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
                    </Tooltip>
                )}
            >
                <div role={'button'}>
                    <ShoppingBagIcon count={3} />
                </div>
            </OverlayTrigger>
        )).to.equal(true)
    })
})