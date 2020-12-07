import PropTypes from 'prop-types'

const ShoppingBag = ({ count }) => (
    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-bag' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z' />
        {
            count && (
                <text x='50%' y='65%' fontSize='7' textAnchor='middle' strokeWidth='0.2em' dy='.3em'>
                    {count}
                </text>
            )
        }
    </svg>
)

ShoppingBag.propTypes = {
    count: PropTypes.number.isRequired
}

export default ShoppingBag