import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import RequiredInputField from 'components/Forms/RequiredInputField'
import { validateNumber, validateEmail, validatePhone } from 'components/Forms/validators'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import translate from 'translate'

export const Billing = ({ strings }) => (
    <div className='row m-3'>
        <div className='col-md-12'>
            <StepTitle>
                {strings.billing}
            </StepTitle>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField name={'firstName'} label={strings.firstName} />
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField name={'lastName'} label={strings.lastName} />
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField
                        name={'email'}
                        label={strings.email}
                        validators={[validateEmail]}
                    />
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField
                        name={'phoneNumber'}
                        label={strings.phone}
                        validators={[validatePhone]}
                    />
                    <span className='text-secondary'>{strings.example}: 123-456-7890</span>
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField name={'billingAddress'} label={strings.billingAddress} />
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <RequiredInputField
                        name={'postCode'}
                        label={strings.postCode}
                        validators={[validateNumber]}
                    />
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col-12'>
                    <label>{strings.country}</label>
                    <Field name='country' component='select' className='form-control w-100'>
                        <option value='bg'>{strings.bg}</option>
                        <option value='uk'>{strings.uk}</option>
                        <option value='de'>{strings.de}</option>
                    </Field>
                </div>
            </div>
        </div>
    </div>
)

Billing.propTypes = {
    strings: PropTypes.object.isRequired
}

Billing.defaultProps = {
    strings: {
        billing: 'Billing',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        example: 'ex',
        billingAddress: 'Billing Address',
        postCode: 'Post Code',
        country: 'Country',
        bg: 'Bulgaria',
        uk: 'United Kingdom',
        de: 'Germany'
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Billing')(Billing)