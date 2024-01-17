import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ReactStars from 'react-stars'
import { toast } from 'react-toastify'

import Button from 'react-bootstrap/Button'

import ProductModal from 'components/Pages/ProductCategory/ProductModal'
import ProductDescription from './ProductDescription'
import ClubcardPromoPrice from './ClubcardPromoPrice'

import { cakeProductCategory } from 'images'
import currencyFormatter from 'components/formatters/currencyFormatter'

import './ProductItem.scss'

import translate from 'translate'

export class ProductItem extends Component {
    handleAddToCartClick = () => {
        const { addItemToShoppingCart } = this.props

        const { strings, id, image, name, currency, price } = this.props

        addItemToShoppingCart({
            id,
            image,
            name,
            currency,
            price,
            qty: 1
        })

        toast(strings.message, { autoClose: 2000, hideProgressBar: true, type: 'success' })
    }

    render() {
        const {
            strings, id, categoryId, image,
            imageLabel, name, description, currency,
            price, rating, lang
        } = this.props

        return (
            <div className='m-5 border bg-light rounded shadow p-1'>
                <div className='d-flex align-items-end position-relative'>
                    <span className='promo-img-label rounded'>{imageLabel[lang]}</span>
                    <img
                        role='button'
                        src={cakeProductCategory[image]}
                        width={250}
                        height={300}
                        className='rounded'
                        data-toggle='modal'
                        data-target={`#product-modal-${name[lang].toLowerCase().replaceAll(' ', '-')}`}
                    />
                    <ProductDescription />
                </div>

                <div className='row align-items-center product-container'>
                    <div className='col-10'>
                        <div className='text-break'>{name[lang]}</div>

                        <div>{currencyFormatter(lang, currency[lang], price)}</div>
                    </div>

                    <div className='col-2 pl-0'>
                        <Link to={`/comments/${categoryId}/${id}`}>
                            <i className='bi bi-chat-right-dots h2'></i>
                        </Link>
                    </div>
                </div>

                <ClubcardPromoPrice
                    currency={currency}
                    lang={lang}
                    price={price}
                    discountPercent={5}
                />

                <ReactStars
                    count={5}
                    edit={false}
                    value={rating}
                    size={24}
                    color2={'#ffd700'}
                    className='d-flex justify-content-center'
                />

                <Button
                    variant='success'
                    onClick={this.handleAddToCartClick}
                    className='btn-block'
                >
                    {strings.addToBagBtn}
                </Button>

                <ProductModal
                    image={cakeProductCategory[image]}
                    name={name[lang]}
                    description={description[lang]}
                />
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
    name: PropTypes.object.isRequired,
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