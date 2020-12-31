import CheckoutSteps, { Billing, Shipping, Payment, Preview } from './CheckoutSteps'

const Checkout = () => {
    const steps = [
        { title: 'Billing', component: (<Billing />), showNextButton: true },
        { title: 'Shipping', component: (<Shipping />), showNextButton: true },
        { title: 'Payment', component: (<Payment />), showNextButton: true },
        { title: 'Preview', component: (<Preview />), showNextButton: false }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

export default Checkout