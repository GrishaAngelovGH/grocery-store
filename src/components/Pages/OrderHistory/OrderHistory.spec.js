import OrderHistory from './OrderHistory'

describe('(Component) OrderHistory', () => {
    it('should render component', () => {
        const wrapper = shallow(<OrderHistory />)

        expect(wrapper.equals(
            <div>
                <h1>Order History</h1>
            </div>
        )).to.equal(true)
    })
})