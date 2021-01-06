import { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, FormSpy } from 'react-final-form'

const shippingMethods = {
    'usps_fcpi': { shippingMethod: 'USPS First Class Package International', price: 13.30 },
    'usps_pmi': { shippingMethod: 'USPS Priority Mail International', price: 44.85 },
    'usps_pmei': { shippingMethod: 'USPS Priority Mail Express International', price: 58.99 },
    'dhl_ew': { shippingMethod: 'DHL Express Worldwide', price: 83.73 }
}

class Shipping extends Component {
    handleShippingMethodChange = ({ values: { shipping_method } }) => {
        const { shippingMethod, price } = shippingMethods[shipping_method]
        this.props.changeShippingMethod(shippingMethod, price)
    }

    render() {
        return (
            <div className='row m-1'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>
                                Shipping
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-5'>
                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_fcpi'
                                />{' '}
                                <span className='font-weight-bold'>USPS First Class Package International - £13.30</span>
                                <div className='small text-secondary ml-3'>7 to 21 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmi'
                                />{' '}
                                <span className='font-weight-bold'>USPS Priority Mail International - £44.85</span>
                                <div className='small text-secondary ml-3'>6 to 10 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmei'
                                />{' '}
                                <span className='font-weight-bold'>USPS Priority Mail Express International - £58.99</span>
                                <div className='small text-secondary ml-3'>3 to 5 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='dhl_ew'
                                />{' '}
                                <span className='font-weight-bold'>DHL Express Worldwide - £83.73</span>
                                <div className='small text-secondary ml-3'>2 to 3 business days</div>
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
    changeShippingMethod: PropTypes.func.isRequired
}

export default Shipping