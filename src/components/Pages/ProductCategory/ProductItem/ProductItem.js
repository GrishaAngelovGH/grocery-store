import { Component } from 'react'
import PropTypes from 'prop-types'

import ReactStars from 'react-stars'
import { NotificationManager } from 'react-notifications'

import { cakeProductCategory } from 'images'
class ProductItem extends Component {
    handleAddToCartClick = () => {
        const { addItemToShoppingCart } = this.props

        const { id, image, description, currency, price } = this.props

        addItemToShoppingCart({
            id,
            image,
            description,
            currency,
            price,
            qty: 1
        })

        NotificationManager.success('Item Added To Shopping Cart', '', 1000)
    }

    render() {
        const { image, imageLabel, description, currency, price, rating } = this.props

        return (
            <div className='m-3'>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>{imageLabel}</span>
                    <img src={cakeProductCategory[image]} width={250} height={300} />
                </div>

                <div>{description}</div>

                <div>{`${currency}${price}`}</div>

                <ReactStars
                    count={5}
                    edit={false}
                    value={rating}
                    size={24}
                    color2={'#ffd700'}
                />

                <button
                    type='button'
                    onClick={this.handleAddToCartClick}
                    className='btn btn-success btn-block'
                >
                    Add To Bag
                </button>
            </div>
        )
    }
}

ProductItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

export default ProductItem