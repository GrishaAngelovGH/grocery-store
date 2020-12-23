import { cakeProductCategory } from 'images'
import ReactStars from 'react-stars'

const ProductItem = ({ image, imageLabel, description, price, rating }) => (
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

        <button type='button' className='btn btn-success btn-block'>
            Add To Bag
        </button>
    </div>
)

export default ProductItem