import CheckoutSteps, { Billing, Shipping, Payment } from './CheckoutSteps'

const Checkout = () => {
    const steps = [
        { title: 'Billing', component: (<Billing />) },
        { title: 'Shipping', component: (<Shipping />) },
        { title: 'Payment', component: (<Payment />) },
        { title: 'Preview', component: (<h1>Preview</h1>) }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

export default Checkout