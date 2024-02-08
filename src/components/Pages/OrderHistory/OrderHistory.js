import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Table from 'components/Table'

import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

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
        const { strings, orders, lang } = this.props

        const shippingMethods = {
            'usps_fcpi': { shippingMethod: this.props.strings.shippingMethods.usps_fcpi, shippingMethodPrice: 13.35 },
            'usps_pmi': { shippingMethod: this.props.strings.shippingMethods.usps_pmi, shippingMethodPrice: 44.85 },
            'usps_pmei': { shippingMethod: this.props.strings.shippingMethods.usps_pmei, shippingMethodPrice: 58.99 },
            'dhl_ew': { shippingMethod: this.props.strings.shippingMethods.dhl_ew, shippingMethodPrice: 83.73 }
        }

        const order = orders[this.state.id]
        const { shippingMethod, shippingMethodPrice } = order?.shipping_method ? shippingMethods[order.shipping_method] : { shippingMethod: '', shippingMethodPrice: 0 }

        const total = order?.items.reduce((a, b) => a + (b.price * b.qty), shippingMethodPrice)
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
                                        <ListGroup className='font-weight-bold text-center'>
                                            <ListGroup.Item className='list-group-item-info'>{strings.orderId}: {order.id}</ListGroup.Item>
                                            <ListGroup.Item className='list-group-item-info'>{strings.date}: {new Date(order.date).toLocaleString(lang === 'en' ? 'uk' : 'bg')}</ListGroup.Item>
                                            <ListGroup.Item className='list-group-item-info'>{strings.tableColumns.shippingMethod}: {shippingMethod} {currencyFormatter(lang, currency, shippingMethodPrice.toFixed(2))}</ListGroup.Item>
                                            <ListGroup.Item className='list-group-item-info'>{strings.paymentMethod}: {order['payment_method'] === 'credit_card' ? strings.creditCard : strings.payPal}</ListGroup.Item>
                                            {order.creditCardNumber && <ListGroup.Item className='list-group-item-info'>{strings.creditCardNumber}: {order.creditCardNumber}</ListGroup.Item>}
                                        </ListGroup>


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
    lang: PropTypes.string.isRequired
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
        total: 'Total',
        shippingMethods: {
            usps_fcpi: 'USPS First Class Package International',
            usps_pmi: 'USPS Priority Mail International',
            usps_pmei: 'USPS Priority Mail Express International',
            dhl_ew: 'DHL Express Worldwide'
        }
    }
}

export default translate('Pages.OrderHistory')(OrderHistory)