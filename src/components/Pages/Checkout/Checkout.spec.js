import CheckoutSteps, { Billing, Shipping, Payment, Preview } from './CheckoutSteps'
import Checkout from './Checkout'

describe('(Component) Checkout', () => {
    it('should render component', () => {
        const wrapper = shallow(<Checkout />)

        const steps = [
            { title: 'Billing', component: (<Billing />), showNextButton: true, showPrevButton: false },
            { title: 'Shipping', component: (<Shipping />), showNextButton: true, showPrevButton: true },
            { title: 'Payment', component: (<Payment />), showNextButton: true, showPrevButton: true },
            { title: 'Preview', component: (<Preview />), showNextButton: false, showPrevButton: true }
        ]

        expect(wrapper.equals(
            <CheckoutSteps steps={steps} />
        )).to.equal(true)
    })
})