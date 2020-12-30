import CheckoutSteps, { Billing } from './CheckoutSteps'

const Checkout = () => {
    const steps = [
        { title: 'Billing', component: (<Billing />) },
        { title: 'Shipping', component: (<h1>Shipping</h1>) },
        { title: 'Payment', component: (<h1>Payment</h1>) },
        { title: 'Preview', component: (<h1>Preview</h1>) }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

export default Checkout