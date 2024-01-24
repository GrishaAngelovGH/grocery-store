import { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Table from 'components/Table'

import './OrderHistory.scss'

import currencyFormatter from 'components/formatters/currencyFormatter'

import translate from 'translate'

export class OrderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = { id: '' }
    }

    handleClick = ({ target: { innerText: id } }) => {
        this.setState({ id })
    }

    render() {
        const { strings, orders, lang, checkout } = this.props

        const order = orders[this.state.id]

        const total = order?.items.reduce((a, b) => a + (b.price * b.qty), checkout.shippingMethodPrice)
        const currency = order?.items[0].currency[lang]

        return (
            <div className='row no-gutters'>
                <div className='col-12'>
                    <div className='row no-gutters bg-info justify-content-between align-items-center'>
                        <div className='col-8 col-md-4'>
                            <h1 className='m-0 text-white p-1'>{strings.orderHistory}</h1>
                        </div>
                        <div className='col-2 col-md-1 text-right mr-2'>
                            <Link to='/' className='btn btn-light bi bi-arrow-left' />
                        </div>
                    </div>

                    <div className='row no-gutters order-history overflow-auto'>
                        <div className='col col-md-3 col-lg-2 border-right border-info'>
                            {
                                Object.values(orders).map(v => (
                                    <p
                                        key={v.id}
                                        role='button'
                                        className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                                        onClick={this.handleClick}
                                    >
                                        {v.id}
                                    </p>
                                ))
                            }
                        </div>
                        <div className='col col-md-9 col-lg-10'>
                            {
                                order && (
                                    <div className='mt-2 mb-5'>
                                        <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>{strings.orderId}: {order.id}</p>
                                        <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>{strings.date}: {new Date(order.date).toLocaleString(lang === 'en' ? 'uk' : 'bg')}</p>
                                        <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>{strings.tableColumns.shippingMethod}: {checkout.shippingMethod} {currencyFormatter(lang, currency, checkout.shippingMethodPrice.toFixed(2))}</p>
                                        <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>{strings.paymentMethod}: {order['payment_method'] === 'credit_card' ? strings.creditCard : strings.payPal}</p>
                                        {order.creditCardNumber && <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>{strings.creditCardNumber}: {order.creditCardNumber}</p>}

                                        <div className='mt-2'>
                                            <Table
                                                columns={[
                                                    strings.tableColumns.item,
                                                    strings.tableColumns.qty,
                                                    strings.tableColumns.price,
                                                    strings.tableColumns.subtotal,
                                                ]}
                                                data={
                                                    order.items.map(v => [
                                                        v.name[lang],
                                                        v.qty,
                                                        currencyFormatter(lang, currency, v.price),
                                                        currencyFormatter(lang, v.currency[lang], v.price * v.qty)
                                                    ])
                                                }
                                            />
                                        </div>
                                    </div>
                                )
                            }

                            {
                                total && (
                                    <h3 className='p-2 m-0 font-weight-bold text-center bg-success text-white fixed-bottom'>
                                        {strings.total}: {currencyFormatter(lang, currency, total.toFixed(2))}
                                    </h3>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


OrderHistory.propTypes = {
    strings: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    checkout: PropTypes.object.isRequired
}

OrderHistory.defaultProps = {
    strings: {
        orderHistory: 'Order History',
        orderId: 'OrderId',
        date: 'Date',
        paymentMethod: 'Payment Method',
        creditCard: 'Credit Card',
        payPal: 'PayPal',
        creditCardNumber: 'Credit Card Number',
        tableColumns: {
            item: 'Item',
            qty: 'Qty',
            price: 'Price',
            subtotal: 'Subtotal',
            shippingMethod: 'Shipping Method'
        },
        total: 'Total'
    }
}

export default translate('Pages.OrderHistory')(OrderHistory)