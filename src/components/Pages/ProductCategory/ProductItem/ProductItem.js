import { Component } from 'react'
import ReactStars from 'react-stars'
import { NotificationManager } from 'react-notifications'

import { cakeProductCategory } from 'images'
class ProductItem extends Component {
    handleAddToCartClick = () => {
        const { addItemToShoppingCart } = this.props

        const { image, description, price } = this.props

        addItemToShoppingCart({
            image,
            description,
            price
        })

        NotificationManager.success('Item Added To Shopping Cart')
    }

    render() {
        const { image, imageLabel, description, price, rating } = this.props

        return (
            <div className='m-3'>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>{imageLabel}</span>
                    <img src={cakeProductCategory[image]} width={250} height={300} />
                </div>

                <div>{description}</div>

                <div>{price}</div>

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

export default ProductItem