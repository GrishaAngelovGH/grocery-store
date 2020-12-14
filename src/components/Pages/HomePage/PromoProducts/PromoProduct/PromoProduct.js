import PropTypes from 'prop-types'

import './PromoProduct.scss'

const PromoProduct = ({ image, imageLabel, description, linkTitle }) => (
    <div>
        <div className='d-flex align-items-end'>
            <span className='promo-img-label'>{imageLabel}</span>
            <img src={image} width={350} height={300} />
        </div>
        <div>{description}</div>
        <div role='button' className='small font-weight-bold'>{linkTitle}</div>
    </div>
)

PromoProduct.propTypes = {
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired
}

export default PromoProduct