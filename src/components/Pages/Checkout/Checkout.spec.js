import CheckoutSteps, { Billing, Shipping, Payment, Preview } from './CheckoutSteps'
import Checkout from './Checkout'

describe('(Component) Checkout', () => {
    it('should render component', () => {
        const wrapper = shallow(<Checkout />)

        const steps = [
            { title: 'Billing', component: (<Billing />), showNextButton: true },
            { title: 'Shipping', component: (<Shipping />), showNextButton: true },
            { title: 'Payment', component: (<Payment />), showNextButton: true },
            { title: 'Preview', component: (<Preview />), showNextButton: false }
        ]

        expect(wrapper.equals(
            <CheckoutSteps steps={steps} />
        )).to.equal(true)
    })
})