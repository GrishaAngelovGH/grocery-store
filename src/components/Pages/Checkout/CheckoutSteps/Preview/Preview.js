import PropTypes from 'prop-types'
import currencyFormatter from 'components/formatters/currencyFormatter'
import translate from 'translate'

export const Preview = ({ strings, lang, items, shippingMethod, shippingMethodPrice }) => {
    let total = 0
    const currency = items[0].currency[lang]

    items.forEach(v => {
        total += v.price * v.qty
    })

    total += shippingMethodPrice

    return (
        <div className='row'>
            <div className='col-md-5'>
                {
                    items.map(v => (
                        <div key={v.id} className='font-weight-bold'>
                            <div>{v.description[lang]} {`(${currencyFormatter(lang, v.currency[lang], v.price * v.qty)})`}</div>
                        </div>
                    ))
                }

                <div className='mt-2 font-weight-bold'>
                    {shippingMethod}: {currencyFormatter(lang, currency, shippingMethodPrice.toFixed(2))}
                </div>

                <div className='mt-2 font-weight-bold'>
                    {strings.total}: {currencyFormatter(lang, currency, total.toFixed(2))}
                </div>

                <button type='submit' className='btn btn-primary'>
                    {strings.placeOrder}
                </button>
            </div>
        </div>
    )
}

Preview.propTypes = {
    lang: PropTypes.string.isRequired,
    strings: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    shippingMethod: PropTypes.string.isRequired,
    shippingMethodPrice: PropTypes.number.isRequired
}

Preview.defaultProps = {
    strings: {
        total: 'Total',
        placeOrder: 'Place Order'
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Preview')(Preview)