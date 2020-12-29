import { cakeProductCategory } from 'images'
import ShoppingBagItem from './ShoppingBagItem'

describe('(Component) ShoppingBagItem', () => {
    let wrapper, removeItemFromShoppingCart

    beforeEach(() => {
        removeItemFromShoppingCart = sinon.spy()

        wrapper = shallow(
            <ShoppingBagItem
                id={'id-1'}
                image={'vanillaCake'}
                description={'description-1'}
                currency={'£'}
                price={30.00}
                qty={2}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row m-3 p-3 border shadow-sm'>
                <div className='col-md-4'>
                    <img src={cakeProductCategory['vanillaCake']} width={160} height={160} />
                </div>

                <div className='col-md-6 font-weight-bold'>
                    <div className='row no-gutters'>description-1</div>

                    <div className='row mt-4'>
                        <div className='col-md-8'>
                            <div>Price: {`£${30.00}`}</div>

                            <div>Qty: 2</div>

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
        const button = wrapper.find('button')

        button.simulate('click')

        removeItemFromShoppingCart.should.have.been.calledOnce
        removeItemFromShoppingCart.should.have.been.calledWith('id-1')
    })
})