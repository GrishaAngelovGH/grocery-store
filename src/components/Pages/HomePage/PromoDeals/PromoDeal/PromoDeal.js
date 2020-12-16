import PropTypes from 'prop-types'

import './PromoDeal.scss'

const PromoDeal = ({ deal }) => (
    <div className='promo-deal d-flex flex-column justify-content-center align-items-center text-center'>
        <div className='text-uppercase mb-2'>{deal.category}</div>
        <div className='text-uppercase font-weight-bold mb-2'>{deal.description}</div>
        <div className='font-italic'>{deal.linkTitle}</div>
    </div>
)

PromoDeal.propTypes = {
    deal: PropTypes.object.isRequired
}

export default PromoDeal