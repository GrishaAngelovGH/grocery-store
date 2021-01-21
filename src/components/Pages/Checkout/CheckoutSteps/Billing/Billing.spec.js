import { Field } from 'react-final-form'

import RequiredInputField from 'components/Forms/RequiredInputField'
import { validateNumber, validateEmail, validatePhone } from 'components/Forms/validators'

import Billing from './Billing'

describe('(Component) Billing', () => {
    it('should render component', () => {
        const wrapper = shallow(<Billing />)

        expect(wrapper.equals(
            <div className='row m-3'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>
                                Billing
                            </h1>
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField name={'firstName'} label={'First Name'} />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField name={'lastName'} label={'Last Name'} />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField
                                name={'email'}
                                label={'Email'}
                                validators={[validateEmail]}
                            />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField
                                name={'phoneNumber'}
                                label={'Phone'}
                                validators={[validatePhone]}
                            />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField name={'billingAddress'} label={'Billing Addr'} />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <RequiredInputField
                                name={'postCode'}
                                label={'Post Code'}
                                validators={[validateNumber]}
                            />
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-md-6 col-lg-3'>
                            <label>Country</label>
                            <Field name='favoriteColor' component='select' className='w-100'>
                                <option value='bg'>Bulgaria</option>
                                <option value='uk'>United Kingdom</option>
                                <option value='de'>Germany</option>
                            </Field>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})