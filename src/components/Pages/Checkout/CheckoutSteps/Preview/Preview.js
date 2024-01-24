import PropTypes from 'prop-types'
import currencyFormatter from 'components/formatters/currencyFormatter'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import Table from 'components/Table'

import translate from 'translate'

export const Preview = ({ strings, lang, items, shippingMethod, shippingMethodPrice }) => {
    const total = items.reduce((a, b) => a + (b.price * b.qty), shippingMethodPrice)
    const currency = items[0].currency[lang]

    return (
        <div className='row'>
            <div className='col-md-12'>
                <StepTitle>
                    {strings.preview}
                </StepTitle>

                <Table
                    columns={[
                        strings.tableColumns.item,
                        strings.tableColumns.qty,
                        strings.tableColumns.price,
                        strings.tableColumns.subtotal,
                    ]}
                    data={
                        items.map(v => [
                            v.name[lang],
                            v.qty,
                            currencyFormatter(lang, currency, v.price),
                            currencyFormatter(lang, v.currency[lang], v.price * v.qty)
                        ])
                    }
                />

                <Table
                    columns={[
                        strings.tableColumns.shippingMethod,
                        strings.tableColumns.price,
                    ]}
                    data={[[
                        shippingMethod,
                        currencyFormatter(lang, currency, shippingMethodPrice.toFixed(2))
                    ]]}
                />

                <h3 className='font-weight-bold text-center'>
                    {strings.total}: {currencyFormatter(lang, currency, total.toFixed(2))}
                </h3>

                <button type='submit' className='btn btn-light btn-block border border-secondary shadow mb-3'>
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
        preview: 'Preview',
        total: 'Total',
        placeOrder: 'Place Order',
        tableColumns: {
            item: 'Item',
            qty: 'Qty',
            price: 'Price',
            subtotal: 'Subtotal',
            shippingMethod: 'Shipping Method'
        }
    }
}

export default translate('Pages.Checkout.CheckoutSteps.Preview')(Preview)