import { Link } from 'react-router-dom'

import { OrderHistory } from './OrderHistory'

import Table from 'components/Table'

import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

describe('(Component) OrderHistory', () => {
    let wrapper, cancelOrder

    const orders = {
        '14203452887394308': {
            id: '14203452887394308',
            shipping_method: 'usps_fcpi',
            payment_method: 'credit_card',
            items: [
                { id: 1, image: 'cookiesAndCreamCake', name: { en: 'Cookies And Cream Cake', bg: 'Торта с бисквитки и крем' }, currency: { en: '£', bg: 'лв' }, price: 30, qty: 2 }
            ],
            creditCardNumber: '*********3456',
            date: new Date('2024-01-24T09:12:32'),
            status: 'pending'
        },
        '24203452887394308': {
            id: '24203452887394308',
            shipping_method: 'usps_fcpi',
            payment_method: 'credit_card',
            items: [
                { id: 1, image: 'cookiesAndCreamCake', name: { en: 'Cookies And Cream Cake', bg: 'Торта с бисквитки и крем' }, currency: { en: '£', bg: 'лв' }, price: 30, qty: 2 }
            ],
            creditCardNumber: '*********3456',
            date: new Date('2024-01-24T09:15:32'),
            status: 'cancelled'
        }
    }

    beforeEach(() => {
        cancelOrder = sinon.spy()

        wrapper = shallow(
            <OrderHistory
                orders={orders}
                lang='en'
                cancelOrder={cancelOrder}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-12'>
                    <div className='row no-gutters bg-info justify-content-between align-items-center'>
                        <div className='col-8 col-md-4'>
                            <h1 className='m-0 text-white p-1'>Order History</h1>
                        </div>
                        <div className='col-2 col-md-1 text-right mr-2'>
                            <Link to='/' className='btn btn-light bi bi-arrow-left' />
                        </div>
                    </div>

                    <div className='row no-gutters order-history overflow-auto'>
                        <div className='col col-md-3 col-lg-2 border-right border-info'>
                            <div className='d-flex flex-column align-items-center'>
                                <Form.Select value='' className='m-2 p-1 border rounded' onChange={wrapper.instance().handleSelect}>
                                    <option value=''>All</option>
                                    <option value='pending'>Pending Order</option>
                                    <option value='cancelled'>Cancelled Order</option>
                                </Form.Select>
                                <div
                                    className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                                >
                                    <div>14203452887394308 Pending Order</div>
                                    <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
                                    <button disabled={true} className='btn btn-light w-25 bi bi-filetype-pdf mr-2 p-0' onClick={wrapper.instance().handleGeneratePDF}></button>
                                    <button
                                        className='btn btn-light w-25 bi bi-x mr-2 p-0'
                                        onClick={wrapper.find('button').at(2).prop('onClick')}
                                    >
                                    </button>
                                </div>
                                <div
                                    className='m-2 p-1 bg-warning text-white text-center rounded font-weight-bold'
                                >
                                    <div>24203452887394308 Cancelled Order</div>
                                    <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
                                    <button disabled={true} className='btn btn-light w-25 bi bi-filetype-pdf mr-2 p-0' onClick={wrapper.instance().handleGeneratePDF}></button>
                                </div>
                            </div>
                        </div>
                        <div className='col col-md-9 col-lg-10'>
                        </div>
                    </div>
                </div>
            </div >
        )).to.equal(true)
    })

    it('should render selected order', () => {
        wrapper.setState({ id: '14203452887394308', value: '' })

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-12'>
                    <div className='row no-gutters bg-info justify-content-between align-items-center'>
                        <div className='col-8 col-md-4'>
                            <h1 className='m-0 text-white p-1'>Order History</h1>
                        </div>
                        <div className='col-2 col-md-1 text-right mr-2'>
                            <Link to='/' className='btn btn-light bi bi-arrow-left' />
                        </div>
                    </div>

                    <div className='row no-gutters order-history overflow-auto'>
                        <div className='col col-md-3 col-lg-2 border-right border-info'>
                            <div className='d-flex flex-column align-items-center'>
                                <Form.Select value='' className='m-2 p-1 border rounded' onChange={wrapper.instance().handleSelect}>
                                    <option value=''>All</option>
                                    <option value='pending'>Pending Order</option>
                                    <option value='cancelled'>Cancelled Order</option>
                                </Form.Select>
                                <div
                                    className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                                >
                                    <div>14203452887394308 Pending Order</div>
                                    <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
                                    <button disabled={false} className='btn btn-light w-25 bi bi-filetype-pdf mr-2 p-0' onClick={wrapper.instance().handleGeneratePDF}></button>
                                    <button
                                        className='btn btn-light w-25 bi bi-x mr-2 p-0'
                                        onClick={wrapper.find('button').at(2).prop('onClick')}
                                    >
                                    </button>
                                </div>
                                <div
                                    className='m-2 p-1 bg-warning text-white text-center rounded font-weight-bold'
                                >
                                    <div>24203452887394308 Cancelled Order</div>
                                    <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
                                    <button disabled={true} className='btn btn-light w-25 bi bi-filetype-pdf mr-2 p-0' onClick={wrapper.instance().handleGeneratePDF}></button>
                                </div>
                            </div>
                        </div>
                        <div className='col col-md-9 col-lg-10'>
                            <div className='m-2 mb-5'>
                                <ListGroup className='font-weight-bold text-center'>
                                    <ListGroup.Item className='list-group-item-info'>OrderId: 14203452887394308</ListGroup.Item>
                                    <ListGroup.Item className='list-group-item-info'>Date: {new Date('2024-01-24T09:12:32').toLocaleString('uk')}</ListGroup.Item>
                                    <ListGroup.Item className='list-group-item-info'>Shipping Method: USPS First Class Package International £13.35</ListGroup.Item>
                                    <ListGroup.Item className='list-group-item-info'>Payment Method: Credit Card</ListGroup.Item>
                                    <ListGroup.Item className='list-group-item-info'>Credit Card Number: *********3456</ListGroup.Item>
                                </ListGroup>

                                <div className='mt-2'>
                                    <Table
                                        columns={[
                                            'Item',
                                            'Qty',
                                            'Price',
                                            'Subtotal',
                                        ]}
                                        data={[
                                            [
                                                'Cookies And Cream Cake',
                                                2,
                                                '£30',
                                                '£60'
                                            ]
                                        ]}
                                    />
                                </div>
                            </div>

                            <h3 className='p-2 m-0 font-weight-bold text-center bg-success text-white fixed-bottom'>
                                Total: £73.35
                            </h3>
                        </div>
                    </div>
                </div>
            </div >
        )).to.equal(true)
    })

    it('should cancel order', () => {
        wrapper.find('button').at(2).prop('onClick')()

        cancelOrder.should.have.been.calledOnce
        cancelOrder.should.have.been.calledWith('14203452887394308')
    })
})