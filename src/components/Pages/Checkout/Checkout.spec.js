import CheckoutSteps, { Billing, Shipping, Payment } from './CheckoutSteps'
import Checkout from './Checkout'

describe('(Component) Checkout', () => {
    it('should render component', () => {
        const wrapper = shallow(<Checkout />)

        const steps = [
            { title: 'Billing', component: (<Billing />) },
            { title: 'Shipping', component: (<Shipping />) },
            { title: 'Payment', component: (<Payment />) },
            { title: 'Preview', component: (<h1>Preview</h1>) }
        ]

        expect(wrapper.equals(
            <CheckoutSteps steps={steps} />
        )).to.equal(true)
    })
})