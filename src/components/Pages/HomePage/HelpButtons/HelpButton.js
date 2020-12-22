import PropTypes from 'prop-types'

const HelpButton = ({ icon, label }) => (
    <button type='button' className='btn btn-secondary'>
        <img src={icon} width={100} height={100} />
        <div>{label}</div>
    </button>
)

HelpButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default HelpButton