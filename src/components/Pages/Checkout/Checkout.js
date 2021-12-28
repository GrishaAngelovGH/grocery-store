import PropTypes from 'prop-types'
import CheckoutSteps, { Billing, Shipping, Payment, Preview } from './CheckoutSteps'

import translate from 'translate'

export const Checkout = ({ strings }) => {
    const steps = [
        { title: strings.billing, component: (<Billing />), showNextButton: true, showPrevButton: false },
        { title: strings.shipping, component: (<Shipping />), showNextButton: true, showPrevButton: true },
        { title: strings.payment, component: (<Payment />), showNextButton: true, showPrevButton: true },
        { title: strings.preview, component: (<Preview />), showNextButton: false, showPrevButton: true }
    ]

    return (
        <CheckoutSteps steps={steps} />
    )
}

Checkout.propTypes = {
    strings: PropTypes.object.isRequired
}

Checkout.defaultProps = {
    strings: {
        billing: 'Billing',
        shipping: 'Shipping',
        payment: 'Payment',
        preview: 'Preview'
    }
}

export default translate('Pages.Checkout')(Checkout)