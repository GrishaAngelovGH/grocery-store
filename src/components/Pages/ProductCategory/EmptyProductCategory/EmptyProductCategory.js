import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import translate from 'translate'

export const EmptyProductCategory = ({ strings }) => (
    <div className='row no-gutters justify-content-center vh-100'>
        <div className='col-md-6'>
            <div className='jumbotron text-center bg-white'>
                <h2 className='display-4'>
                    {strings.label}
                </h2>

                <p className='lead'>
                    {strings.availableItems}
                </p>

                <Link to='/' className='text-decoration-none'>
                    <button type='button' className='btn btn-outline-success btn-block'>
                        {strings.continueBtn}
                    </button>
                </Link>
            </div>
        </div>
    </div>
)

EmptyProductCategory.propTypes = {
    strings: PropTypes.object.isRequired
}

EmptyProductCategory.defaultProps = {
    strings: {
        label: 'No items were found for this category',
        availableItems: 'Only available items are in Food > Celebration Cakes > All Cakes',
        continueBtn: 'Continue'
    }
}

export default translate('Pages.ProductCategory.EmptyProductCategory')(EmptyProductCategory)