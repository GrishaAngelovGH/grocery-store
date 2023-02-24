import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form } from 'react-final-form'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Steps from 'rc-steps'
import 'rc-steps/assets/index.css'

import Step from './Step'
import translate from 'translate'

export class CheckoutSteps extends Component {
    state = {
        currentStep: 0,
        shouldRedirect: false
    }

    handleStepChange = (step) => {
        this.setState({ currentStep: step })
    }

    handleFormSubmit = values => {
        Swal.fire({
            width: 800,
            icon: 'success',
            allowOutsideClick: false,
            title: this.props.strings.successMessage
        }).then(() => {
            this.setState({ shouldRedirect: true })
        })
    }

    formContent = ({ handleSubmit, valid }) => {
        const { currentStep } = this.state
        const { steps } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Step
                    position={currentStep}
                    onChange={this.handleStepChange}
                    showNextButton={steps[currentStep].showNextButton}
                    showPrevButton={steps[currentStep].showPrevButton}
                    disabled={!valid}
                >
                    {
                        steps[currentStep].component
                    }
                </Step>
            </form>
        )
    }

    render() {
        const { currentStep, shouldRedirect } = this.state
        const { steps } = this.props

        return (
            <div className='m-5'>
                <div className='shadow p-2'>
                    <Steps current={currentStep}>
                        {
                            steps.map(v => (
                                <Steps.Step key={v.title} title={v.title} />
                            ))
                        }
                    </Steps>
                </div>

                <Form
                    onSubmit={this.handleFormSubmit}
                    initialValues={{
                        shipping_method: 'usps_fcpi',
                        payment_method: 'credit_card',
                        credit_card_type: 'visa',
                        country: 'bg'
                    }}
                    render={this.formContent}
                />

                {shouldRedirect && <Navigate replace to={'/'} />}
            </div>
        )
    }
}

CheckoutSteps.propTypes = {
    strings: PropTypes.object.isRequired,
    steps: PropTypes.array.isRequired
}

CheckoutSteps.defaultProps = {
    strings: {
        successMessage: 'Your order is successfullly placed'
    }
}

export default translate('Pages.Checkout.CheckoutSteps')(CheckoutSteps)