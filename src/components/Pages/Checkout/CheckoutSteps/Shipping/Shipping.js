import { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, FormSpy } from 'react-final-form'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import currencyFormatter from 'components/formatters/currencyFormatter'
import translate from 'translate'

export class Shipping extends Component {
    shippingMethods = {
        'usps_fcpi': { shippingMethod: this.props.strings.usps_fcpi.label, price: 13.35 },
        'usps_pmi': { shippingMethod: this.props.strings.usps_pmi.label, price: 44.85 },
        'usps_pmei': { shippingMethod: this.props.strings.usps_pmei.label, price: 58.99 },
        'dhl_ew': { shippingMethod: this.props.strings.dhl_ew.label, price: 83.73 }
    }

    handleShippingMethodChange = ({ values: { shipping_method } }) => {
        const { shippingMethod, price } = this.shippingMethods[shipping_method]
        this.props.changeShippingMethod(shippingMethod, price)
    }

    render() {
        const { strings, lang } = this.props

        return (
            <div className='row m-1'>
                <div className='col-md-12'>
                    <StepTitle>
                        {strings.shipping}
                    </StepTitle>
                    <div className='row'>
                        <div className='col-md-12 col-lg-7'>
                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_fcpi'
                                />{' '}
                                <span className='font-weight-bold'>{strings.usps_fcpi.label} - {currencyFormatter(lang, strings.currency, this.shippingMethods['usps_fcpi'].price)}</span>
                                <div className='small text-secondary ml-3'>{strings.usps_fcpi.delivery}</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmi'
                                />{' '}
                                <span className='font-weight-bold'>{strings.usps_pmi.label} - {currencyFormatter(lang, strings.currency, this.shippingMethods['usps_pmi'].price)}</span>
                                <div className='small text-secondary ml-3'>{strings.usps_pmi.delivery}</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmei'
                                />{' '}
                                <span className='font-weight-bold'>{strings.usps_pmei.label} - {currencyFormatter(lang, strings.currency, this.shippingMethods['usps_pmei'].price)}</span>
                                <div className='small text-secondary ml-3'>{strings.usps_pmei.delivery}</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='dhl_ew'
                                />{' '}
                                <span className='font-weight-bold'>{strings.dhl_ew.label} - {currencyFormatter(lang, strings.currency, this.shippingMethods['dhl_ew'].price)}</span>
                                <div className='small text-secondary ml-3'>{strings.dhl_ew.delivery}</div>
                            </label>
                        </div>
                    </div>
                </div>
                <FormSpy
                    subscription={{ values: true }}
                    onChange={this.handleShippingMethodChange}
                />
            </div>
        )
    }
}

Shipping.propTypes = {
    lang: PropTypes.string.isRequired,
    strings: PropTypes.object.isRequired,
    changeShippingMethod: PropTypes.func.isRequired
}

Shipping.defaultProps = {
    strings: {
        shipping: 'Shipping',
        currency: '£',
        usps_fcpi: {
            label: 'USPS First Class Package International',
            delivery: '7 to 21 business days'
        },
        usps_pmi: {
            label: 'USPS Priority Mail International',
            delivery: '6 to 10 business days'
        },
        usps_pmei: {
            label: 'USPS Priority Mail Express International',
            delivery: '3 to 5 business days'
        },
        dhl_ew: {
            label: 'DHL Express Worldwide',
            delivery: '2 to 3 business days'
        }
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Shipping')(Shipping)