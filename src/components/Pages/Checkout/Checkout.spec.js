import CheckoutSteps from './CheckoutSteps'
import Checkout from './Checkout'

describe('(Component) Checkout', () => {
    it('should render component', () => {
        const wrapper = shallow(<Checkout />)

        const steps = [
            { title: 'Billing', component: (<h1>Billing</h1>) },
            { title: 'Shipping', component: (<h1>Shipping</h1>) },
            { title: 'Payment', component: (<h1>Payment</h1>) },
            { title: 'Preview', component: (<h1>Preview</h1>) }
        ]

        expect(wrapper.equals(
            <CheckoutSteps steps={steps} />
        )).to.equal(true)
    })
})