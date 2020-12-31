import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form } from 'react-final-form'

import Steps from 'rc-steps'
import 'rc-steps/assets/index.css'

import Step from './Step'

class CheckoutSteps extends Component {
    state = {
        currentStep: 0
    }

    handleStepChange = (step) => {
        this.setState({ currentStep: step })
    }

    handleFormSubmit = values => {
        alert(`Your order is successfullly placed: ${JSON.stringify(values)}`)
    }

    formContent = ({ handleSubmit, valid }) => {
        const { currentStep } = this.state
        const { steps } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Step
                    position={currentStep}
                    onChange={this.handleStepChange}
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
        const { currentStep } = this.state
        const { steps } = this.props

        return (
            <div className='m-5'>
                <Steps current={currentStep}>
                    {
                        steps.map(v => (
                            <Steps.Step key={v.title} title={v.title} />
                        ))
                    }
                </Steps>

                <Form
                    onSubmit={this.handleFormSubmit}
                    initialValues={{
                        shipping_method: 'usps_fcpi',
                        payment_method: 'credit_card',
                    }}
                    render={this.formContent}
                />
            </div>
        )
    }
}

CheckoutSteps.propTypes = {
    steps: PropTypes.array.isRequired
}

export default CheckoutSteps