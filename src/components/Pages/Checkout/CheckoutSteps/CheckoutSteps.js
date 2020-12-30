import { Component } from 'react'
import PropTypes from 'prop-types'

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

                <Step position={currentStep} onChange={this.handleStepChange}>
                    {
                        steps[currentStep].component
                    }
                </Step>
            </div>
        )
    }
}

CheckoutSteps.propTypes = {
    steps: PropTypes.array.isRequired
}

export default CheckoutSteps