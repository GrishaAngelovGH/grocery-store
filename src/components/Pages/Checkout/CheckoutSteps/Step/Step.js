import { Component } from 'react'
import PropTypes from 'prop-types'

class Step extends Component {
    handleChange = () => {
        const { position, onChange } = this.props

        onChange && onChange(position + 1)
    }

    render() {
        return (
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-10 border'>
                    {
                        this.props.children
                    }
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={this.handleChange}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    onChange: PropTypes.func,
    position: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}

export default Step