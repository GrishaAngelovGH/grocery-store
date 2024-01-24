import { Component } from 'react'
import PropTypes from 'prop-types'

import { Form } from 'react-final-form'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Steps from 'rc-steps'
import 'rc-steps/assets/index.css'

import Step from './Step'
import translate from 'translate'

import './CheckoutSteps.scss'

export class CheckoutSteps extends Component {
    state = {
        currentStep: 0,
        shouldRedirect: false
    }

    handleStepChange = (step) => {
        this.setState({ currentStep: step })
    }

    handleFormSubmit = values => {
        const { strings, saveOrder, clearItemsFromShoppingCart } = this.props

        const { creditCardNumber, ...rest } = values

        const newOrder = {
            id: Math.random().toString().slice(2),
            ...rest,
            creditCardNumber: creditCardNumber ? creditCardNumber.slice(-4).padStart(creditCardNumber.length, '*') : '',
            date: new Date()
        }

        saveOrder(newOrder)

        Swal.fire({
            width: 800,
            icon: 'success',
            allowOutsideClick: false,
            title: strings.successMessage
        }).then(() => {
            this.setState({ shouldRedirect: true }, () => {
                clearItemsFromShoppingCart()
            })
        })
    }

    formContent = ({ handleSubmit, valid, values }) => {
        const { currentStep } = this.state
        const { steps } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Step
                    values={values}
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
        const { steps, items } = this.props

        if (shouldRedirect) {
            return <Navigate replace to={'/'} />
        }

        return (
            <div className='checkout-steps p-3'>
                <div className='p-2 border rounded shadow'>
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
                        country: 'bg',
                        items
                    }}
                    render={this.formContent}
                />
            </div>
        )
    }
}

CheckoutSteps.propTypes = {
    strings: PropTypes.object.isRequired,
    steps: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired
}

CheckoutSteps.defaultProps = {
    strings: {
        successMessage: 'Your order has been successfully placed'
    }
}

export default translate('Pages.Checkout.CheckoutSteps')(CheckoutSteps)