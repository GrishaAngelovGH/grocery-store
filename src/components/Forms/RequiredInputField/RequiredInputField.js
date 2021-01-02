import { Component } from 'react'

import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import { composeValidators, required } from '../validators'

class RequiredInputField extends Component {
    validate = () => composeValidators(required, ...this.props.validators || [])

    fieldContent = ({ input, meta }) => {
        const { label } = this.props

        return (
            <div>
                <label>{label}</label>

                {
                    meta.error && meta.touched && (
                        <label className='m-1 p-1 alert-danger'>{meta.error}</label>
                    )
                }

                <input {...input} type='text' className='w-100' />
            </div>
        )
    }

    render() {
        const { name } = this.props

        return (
            <Field
                name={name}
                validate={this.validate()}
            >
                {this.fieldContent}
            </Field>
        )
    }

}

RequiredInputField.propTypes = {
    validators: PropTypes.array,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default RequiredInputField