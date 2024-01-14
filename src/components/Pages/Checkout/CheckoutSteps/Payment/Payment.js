import { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import RequiredInputField from 'components/Forms/RequiredInputField'
import { validateCreditCardNumber } from 'components/Forms/validators'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import { payment } from 'images'

import translate from 'translate'

export class Payment extends Component {
    fieldContent = ({ input }) => (
        <div>
            <input {...input} />
            <span className='m-1 font-weight-bold'>{this.props.strings.creditCard}</span>
            {
                input.checked && (
                    <div className='m-3'>
                        <div className='row justify-content-center mb-2'>
                            <div className='col-5'>
                                <label>
                                    <Field
                                        name='credit_card_type'
                                        component='input'
                                        type='radio'
                                        value='visa'
                                    />{' '}
                                    <span className='m-1 font-weight-bold'>Visa <img src={payment.visa} /></span>
                                    <div className='text-secondary small'>{`${this.props.strings.example}: 4111111111111`}</div>
                                </label>
                            </div>
                            <div className='col-5'>
                                <label>
                                    <Field
                                        name='credit_card_type'
                                        component='input'
                                        type='radio'
                                        value='mastercard'
                                    />{' '}
                                    <span className='font-weight-bold'>Mastercard <img src={payment.mastercard} /></span>
                                    <div className='text-secondary small'>{`${this.props.strings.example}: 5397283356685992`}</div>
                                </label>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <RequiredInputField
                                    name={'creditCardNumber'}
                                    label={this.props.strings.creditCardNumber}
                                    validators={[validateCreditCardNumber]}
                                />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-12'>
                                <RequiredInputField name={'expirationDate'} label={this.props.strings.expirationDate} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )

    render() {
        return (
            <div className='row m-3'>
                <div className='col-md-12'>
                    <StepTitle>
                        {this.props.strings.payment}
                    </StepTitle>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex flex-column'>
                                <label>

                                    <Field
                                        name='payment_method'
                                        type='radio'
                                        value='credit_card'
                                    >
                                        {
                                            this.fieldContent
                                        }
                                    </Field>
                                </label>

                                <label>
                                    <Field
                                        name='payment_method'
                                        component='input'
                                        type='radio'
                                        value='pay_pal'
                                    />{' '}
                                    <span className='font-weight-bold'>Pay Pal</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Payment.propTypes = {
    strings: PropTypes.object.isRequired
}

Payment.defaultProps = {
    strings: {
        payment: 'Payment',
        creditCard: 'Credit Card',
        example: 'ex',
        creditCardNumber: 'Credit Card Number',
        expirationDate: 'Expiration Date (MMYYYY)'
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Payment')(Payment)