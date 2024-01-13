import PropTypes from 'prop-types'

const StepTitle = ({ children }) => (
  <h1 className='bg-light border rounded text-center text-secondary'>
    {children}
  </h1>
)

StepTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default StepTitle