import { Field } from 'react-final-form'

import RequiredInputField from 'components/Forms/RequiredInputField'
import { validateCreditCardNumber } from 'components/Forms/validators'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import { payment } from 'images'

import { Payment } from './Payment'

describe('(Component) Payment', () => {
    it('should render component', () => {
        const wrapper = shallow(<Payment />)

        expect(wrapper.equals(
            <div className='row m-3'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <StepTitle>
                                Payment
                            </StepTitle>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-3'>
                            <label>
                                <Field
                                    name='payment_method'
                                    type='radio'
                                    value='credit_card'
                                >
                                    {
                                        wrapper.instance().fieldContent
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
        )).to.equal(true)
    })

    it('should render field content', () => {
        const wrapper = shallow(<Payment />)

        const input = { checked: false }

        expect(
            wrapper.instance().fieldContent({ input })
        ).to.eql(
            <div>
                <input {...input} />
                <span className='m-1 font-weight-bold'>Credit Card</span>
                {
                    false
                }
            </div>
        )
    })

    it('should render field content for checked radio button', () => {
        const wrapper = shallow(<Payment />)

        const input = { checked: true }

        expect(
            wrapper.instance().fieldContent({ input })
        ).to.eql(
            <div>
                <input {...input} />
                <span className='m-1 font-weight-bold'>Credit Card</span>

                <div className='m-3'>
                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-9'>
                            <label>
                                <Field
                                    name='credit_card_type'
                                    component='input'
                                    type='radio'
                                    value='visa'
                                />{' '}
                                <span className='m-1 font-weight-bold'>Visa <img src={payment.visa} /></span>
                                <div className='text-secondary'>ex: 4111111111111</div>
                            </label>
                            <label>
                                <Field
                                    name='credit_card_type'
                                    component='input'
                                    type='radio'
                                    value='mastercard'
                                />{' '}
                                <span className='font-weight-bold'>Mastercard <img src={payment.mastercard} /></span>
                                <div className='text-secondary'>ex: 5397283356685992</div>
                            </label>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-9'>
                            <RequiredInputField
                                name={'creditCardNumber'}
                                label={'Credit Card Number'}
                                validators={[validateCreditCardNumber]}
                            />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-md-9'>
                            <RequiredInputField name={'expirationDate'} label={'Expiration Date (MMYYYY)'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })
})