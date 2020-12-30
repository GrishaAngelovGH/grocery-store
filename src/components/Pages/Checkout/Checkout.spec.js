import Checkout from './Checkout'

describe('(Component) Checkout', () => {
    it('should render component', () => {
        const wrapper = shallow(<Checkout />)

        expect(wrapper.equals(
            <div>Checkout</div>
        )).to.equal(true)
    })
})