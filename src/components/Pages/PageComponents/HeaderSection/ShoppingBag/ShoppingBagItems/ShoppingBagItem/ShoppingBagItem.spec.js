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
                price={'price-1'}
                qty={1}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='d-flex p-3'>
                <img src={cakeProductCategory['vanillaCake']} width={120} height={120} />

                <div className='d-flex flex-column justify-content-around ml-3 font-weight-bold w-100'>
                    <div>description-1</div>
                    <div>price-1</div>

                    <div className='d-flex flex-column font-weight-bold mt-3'>
                        <div>Qty: 1</div>
                        <button onClick={wrapper.instance().handleRemoveItem} type='button' className='btn btn-outline-primary btn-sm'>
                            Remove
                        </button>
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