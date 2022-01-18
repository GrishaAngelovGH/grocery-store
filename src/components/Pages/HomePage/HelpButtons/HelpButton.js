import PropTypes from 'prop-types'
import './HelpButton.scss'

const HelpButton = ({ icon, label }) => (
    <button type='button' className='btn btn-success help-button'>
        <img src={icon} width={100} height={100} />
        <div>{label}</div>
    </button>
)

HelpButton.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    label: PropTypes.string.isRequired
}

export default HelpButton