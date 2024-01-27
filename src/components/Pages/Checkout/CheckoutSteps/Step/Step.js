import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import translate from 'translate'

export class Step extends Component {
    handleGoToPreviousPage = e => {
        e.preventDefault()
        window.history.go(-1)
    }

    handlePrevStepChange = () => {
        const { position, onChange } = this.props

        onChange && onChange(position - 1)
    }

    handleNextStepChange = () => {
        const { position, onChange } = this.props

        onChange && onChange(position + 1)
    }

    render() {
        const { strings, children, values, disabled, showPrevButton, showNextButton } = this.props

        return (
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-7 col-lg-5 border rounded p-2 shadow bg-white'>
                    {
                        React.cloneElement(children, { values })
                    }
                    <div className='d-flex justify-content-end'>
                        {
                            (!showPrevButton || !showNextButton) && (
                                <button
                                    className='btn btn-light bi bi-arrow-left border mr-2 w-25'
                                    onClick={this.handleGoToPreviousPage}
                                >
                                </button>
                            )
                        }
                        {
                            showPrevButton && (
                                <button
                                    type='button'
                                    className='btn btn-primary w-25 mr-2'
                                    onClick={this.handlePrevStepChange}
                                    disabled={disabled}
                                >
                                    {strings.prev}
                                </button>
                            )
                        }
                        {
                            showNextButton && (
                                <button
                                    type='button'
                                    className='btn btn-primary w-25 mr-2'
                                    onClick={this.handleNextStepChange}
                                    disabled={disabled}
                                >
                                    {strings.next}
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    strings: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showPrevButton: PropTypes.bool.isRequired,
    showNextButton: PropTypes.bool.isRequired,
    position: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

Step.defaultProps = {
    strings: {
        prev: 'Prev',
        next: 'Next'
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Step')(Step)