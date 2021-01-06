import PropTypes from 'prop-types'

const Preview = ({ items, shippingMethod, shippingMethodPrice }) => {
    let total = 0
    const currency = items[0].currency

    items.forEach(v => {
        total += v.price * v.qty
    })

    total += shippingMethodPrice

    return (
        <div className='row'>
            <div className='col-md-5'>
                {
                    items.map(v => (
                        <div key={v.description} className='font-weight-bold'>
                            <div>{v.description} {`(${v.currency}${v.price * v.qty})`}</div>
                        </div>
                    ))
                }
                <div className='mt-2 font-weight-bold'>
                    {shippingMethod}: {currency}{shippingMethodPrice.toFixed(2)}
                </div>

                <div className='mt-2 font-weight-bold'>
                    TOTAL: {currency}{total.toFixed(2)}
                </div>

                <button type='submit' className='btn btn-primary'>
                    Place Order
                </button>
            </div>
        </div>
    )
}

Preview.propTypes = {
    items: PropTypes.array.isRequired,
    shippingMethod: PropTypes.string.isRequired,
    shippingMethodPrice: PropTypes.number.isRequired
}

export default Preview