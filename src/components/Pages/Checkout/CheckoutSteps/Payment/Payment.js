import { Component } from 'react'
import { Field } from 'react-final-form'

import RequiredInputField from 'components/Forms/RequiredInputField'

class Payment extends Component {
    fieldContent = ({ input }) => (
        <div>
            <input {...input} />
            <span className='m-1 font-weight-bold'>Credit Card</span>
            {
                input.checked && (
                    <div>
                        <div className='row mb-2'>
                            <div className='col-md-6 col-lg-7'>
                                <RequiredInputField name={'creditCardNumber'} label={'Credit Card Number'} />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-md-6 col-lg-9'>
                                <RequiredInputField name={'expirationDate'} label={'Expiration Date (MMYYYY)'} />
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
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>
                                Payment
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-4'>
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
        )
    }
}

export default Payment