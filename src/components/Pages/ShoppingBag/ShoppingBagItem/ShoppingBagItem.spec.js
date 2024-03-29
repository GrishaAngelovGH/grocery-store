import { cakeProductCategory } from 'images'
import { ShoppingBagItem } from './ShoppingBagItem'

describe('(Component) ShoppingBagItem', () => {
    let wrapper, removeItemFromShoppingCart, changeItemQtyFromShoppingCart

    beforeEach(() => {
        removeItemFromShoppingCart = sinon.spy()
        changeItemQtyFromShoppingCart = sinon.spy()

        wrapper = shallow(
            <ShoppingBagItem
                id={5}
                image={'vanillaCake'}
                name={{ en: 'Vanilla Cake' }}
                currency={'£'}
                price={30.00}
                qty={2}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
                changeItemQtyFromShoppingCart={changeItemQtyFromShoppingCart}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row m-3 mt-5 p-3 border shadow-sm jumbotron justify-content-center'>
                <div className='col-md-6 text-center mb-3'>
                    <img src={cakeProductCategory['vanillaCake']} width={160} height={160} className='rounded' />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='text-secondary text-center'>Vanilla Cake</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>Price: {`£${30.00}`}</div>

                            <div className='d-flex align-items-center'>
                                <div>Qty:</div>
                                <div className='btn-group mx-2' role='group'>
                                    <button
                                        type='button'
                                        className='btn btn-sm btn-primary'
                                        onClick={wrapper.instance().handleDecrementQty}
                                    >
                                        <i className='bi bi-chevron-left'></i>
                                    </button>

                                    <button type='button' className='btn btn-sm btn-primary'>
                                        {2}
                                    </button>

                                    <button
                                        type='button'
                                        className='btn btn-sm btn-primary'
                                        onClick={wrapper.instance().handleIncrementQty}
                                    >
                                        <i className='bi bi-chevron-right'></i>
                                    </button>
                                </div>
                            </div>

                            <div>Subtotal: {`£${60.00}`}</div>
                        </div>

                    </div>

                    <div className='row mt-2'>
                        <div className='col-md-12'>
                            <button
                                type='button'
                                className='btn btn-outline-primary btn-sm btn-block'
                                onClick={wrapper.instance().handleRemoveItem}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle remove item', () => {
        const button = wrapper.find('button').last()

        button.simulate('click')

        removeItemFromShoppingCart.should.have.been.calledOnce
        removeItemFromShoppingCart.should.have.been.calledWith(5)
    })

    it('should handle decrement item qty', () => {
        const button = wrapper.find('button').at(0)

        button.simulate('click')

        changeItemQtyFromShoppingCart.should.have.been.calledOnce
        changeItemQtyFromShoppingCart.should.have.been.calledWith({ id: 5, increment: false })
    })

    it('should handle increment item qty', () => {
        const button = wrapper.find('button').at(2)

        button.simulate('click')

        changeItemQtyFromShoppingCart.should.have.been.calledOnce
        changeItemQtyFromShoppingCart.should.have.been.calledWith({ id: 5, increment: true })
    })
})