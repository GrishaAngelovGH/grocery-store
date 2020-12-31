import { Component } from 'react'
import PropTypes from 'prop-types'

class Step extends Component {
    handleChange = () => {
        const { position, onChange } = this.props

        onChange && onChange(position + 1)
    }

    render() {
        const { children, disabled, showNextButton } = this.props

        return (
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-10 border'>
                    {
                        children
                    }
                    {
                        showNextButton && (
                            <button
                                type='button'
                                className='btn btn-primary w-25'
                                onClick={this.handleChange}
                                disabled={disabled}
                            >
                                Next
                            </button>
                        )
                    }
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showNextButton: PropTypes.bool.isRequired,
    position: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

export default Step