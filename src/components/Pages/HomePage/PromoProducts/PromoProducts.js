import PropTypes from 'prop-types'

import PromoProduct from './PromoProduct'

const PromoProducts = ({ products }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <div className='row no-gutters justify-content-center'>
                <h2>G&S Food</h2>
            </div>

            <div className='row no-gutters justify-content-around'>
                {
                    products.map(v => (
                        <PromoProduct
                            key={v.description}
                            image={v.image}
                            imageLabel={v.imageLabel}
                            description={v.description}
                            linkTitle={v.linkTitle}
                        />
                    ))
                }
            </div>
        </div>
    </div>
)

PromoProducts.propTypes = {
    products: PropTypes.array.isRequired
}

export default PromoProducts