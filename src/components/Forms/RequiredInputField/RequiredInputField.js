import { Component } from 'react'

import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

export const required = value => (value ? undefined : 'Required')

class RequiredInputField extends Component {

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
                validate={required}
            >
                {this.fieldContent}
            </Field>
        )
    }

}

RequiredInputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default RequiredInputField