import CheckoutSteps, { Billing, Shipping, Payment, Preview } from './CheckoutSteps'

const Checkout = () => {
    const steps = [
        { title: 'Billing', component: (<Billing />), showNextButton: true, showPrevButton: false },
        { title: 'Shipping', component: (<Shipping />), showNextButton: true, showPrevButton: true },
        { title: 'Payment', component: (<Payment />), showNextButton: true, showPrevButton: true },
        { title: 'Preview', component: (<Preview />), showNextButton: false, showPrevButton: true }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

export default Checkout