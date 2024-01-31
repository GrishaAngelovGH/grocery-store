import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Table from 'components/Table'

import Form from 'react-bootstrap/Form'

import './OrderHistory.scss'

import generatePDF from 'react-to-pdf'
import currencyFormatter from 'components/formatters/currencyFormatter'
import translate from 'translate'

export class OrderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = { id: '', value: '' }
        this.ref = React.createRef()
    }

    handleClick = ({ target: { parentNode } }) => {
        const id = parentNode.firstChild.innerText.split(' ')[0]
        this.setState({ id })
    }

    handleGeneratePDF = () => {
        generatePDF(this.ref, { filename: `order-${this.state.id}.pdf` })
    }

    handleSelect = ({ target }) => {
        this.setState({ value: target.value })
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

                    <div ref={this.ref} className='row no-gutters order-history overflow-auto'>
                        <div className='col col-md-3 col-lg-2 border-right border-info'>
                            <div className='d-flex flex-column align-items-center'>
                                <Form.Select value={this.state.value} className='m-2 p-1 border rounded' onChange={this.handleSelect}>
                                    <option value=''>{strings.status.all}</option>
                                    <option value='pending'>{strings.status.pending}</option>
                                    <option value='cancelled'>{strings.status.cancelled}</option>
                                </Form.Select>

                                {
                                    Object.values(orders)
                                        .filter(v => v.status === this.state.value || !this.state.value)
                                        .map(v => {
                                            const cancelOrder = () => {
                                                this.props.cancelOrder(v.id)
                                            }

                                            const statusClass = v.status === 'pending' ? 'bg-info' : 'bg-warning'
                                            const isPending = v.status === 'pending'
                                            const status = isPending ? strings.status.pending : strings.status.cancelled
                                            const disabledButton = this.state.id !== v.id

                                            return (
                                                <div
                                                    key={v.id}
                                                    className={`m-2 p-1 ${statusClass} text-white text-center rounded font-weight-bold`}
                                                >
                                                    <div>{v.id} {status}</div>
                                                    <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={this.handleClick}></button>
                                                    <button disabled={disabledButton} className='btn btn-light w-25 bi bi-filetype-pdf mr-2 p-0' onClick={this.handleGeneratePDF}></button>
                                                    {
                                                        isPending && (
                                                            <button
                                                                className='btn btn-light w-25 bi bi-x mr-2 p-0'
                                                                onClick={cancelOrder}
                                                            >
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className='col col-md-9 col-lg-10'>
                            {
                                order && (
                                    <div className='m-2 mb-5'>
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
        status: {
            all: 'All',
            pending: 'Pending Order',
            cancelled: 'Cancelled Order',
        },
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