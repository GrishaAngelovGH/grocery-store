import CheckoutSteps, { Billing, Shipping, Payment } from './CheckoutSteps'

const Checkout = () => {
    const steps = [
        { title: 'Billing', component: (<Billing />), showNextButton: true },
        { title: 'Shipping', component: (<Shipping />), showNextButton: true },
        { title: 'Payment', component: (<Payment />), showNextButton: true },
        { title: 'Preview', component: (<h1>Preview</h1>), showNextButton: false }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

export default Checkout