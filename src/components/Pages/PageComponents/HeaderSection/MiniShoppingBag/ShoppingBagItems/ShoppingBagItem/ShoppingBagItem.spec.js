import { cakeProductCategory } from 'images'
import { ShoppingBagItem } from './ShoppingBagItem'

describe('(Component) ShoppingBagItem', () => {
    let wrapper, removeItemFromShoppingCart

    beforeEach(() => {
        removeItemFromShoppingCart = sinon.spy()

        wrapper = shallow(
            <ShoppingBagItem
                id={1}
                lang={'en'}
                image={'vanillaCake'}
                name='Vanilla Cake'
                currency={'£'}
                price={10}
                qty={1}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row no-gutters p-3 border-top bg-light justify-content-around'>
                <div className='col-5'>
                    <img src={cakeProductCategory['vanillaCake']} width={120} height={120} className='rounded' />

                </div>
                <div className='col-5'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='font-weight-bold'>Vanilla Cake</div>
                        <div className='bg-info text-white rounded w-100'>£10</div>
                        <div className='bg-info text-white rounded w-100 mt-1'>Qty: 1</div>
                        <button onClick={wrapper.instance().handleRemoveItem} className='btn btn-danger bi bi-trash mt-1 p-1 rounded-circle d-flex'></button>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle remove item', () => {
        const button = wrapper.find('button')

        button.simulate('click')

        removeItemFromShoppingCart.should.have.been.calledOnce
        removeItemFromShoppingCart.should.have.been.calledWith(1)
    })
})