import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ReactStars from 'react-stars'
import { toast } from 'react-toastify'

import { cakeProductCategory } from 'images'
import { ChatLeftDots } from 'components/Icons'
import currencyFormatter from 'components/formatters/currencyFormatter'

import './ProductItem.scss'

import translate from 'translate'

export class ProductItem extends Component {
    handleAddToCartClick = () => {
        const { addItemToShoppingCart } = this.props

        const { strings, id, image, description, currency, price } = this.props

        addItemToShoppingCart({
            id,
            image,
            description,
            currency,
            price,
            qty: 1
        })

        toast(strings.message, { autoClose: 2000, hideProgressBar: true, type: 'success' })
    }

    render() {
        const {
            strings, id, categoryId, image,
            imageLabel, description, currency,
            price, rating, lang
        } = this.props

        return (
            <div className='m-3'>
                <div className='d-flex align-items-end'>
                    <span className='promo-img-label'>{imageLabel[lang]}</span>
                    <img src={cakeProductCategory[image]} width={250} height={300} />
                </div>

                <div className='row justify-content-start align-items-center product-container'>
                    <div className='col-9 col-md-10'>
                        <div className='product-description'>{description[lang]}</div>

                        <div>{currencyFormatter(lang, currency[lang], price)}</div>
                    </div>

                    <div className='col-1 col-md-1 pl-0'>
                        <Link to={`/comments/${categoryId}/${id}`}>
                            <ChatLeftDots />
                        </Link>
                    </div>
                </div>

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
                    {strings.addToBagBtn}
                </button>
            </div>
        )
    }
}

ProductItem.propTypes = {
    strings: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    categoryId: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    imageLabel: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    currency: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

ProductItem.defaultProps = {
    strings: {
        message: 'Item added to shopping bag',
        addToBagBtn: 'Add To Bag'
    }
}

export default translate('Pages.ProductCategory.ProductItem')(ProductItem)