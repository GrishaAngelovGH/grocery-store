import { Link } from 'react-router-dom'

import { OrderHistory } from './OrderHistory'

import Table from 'components/Table'

describe('(Component) OrderHistory', () => {
    let wrapper

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
        }
    }

    beforeEach(() => {
        wrapper = shallow(
            <OrderHistory
                orders={orders}
                lang='en'
                checkout={{
                    shippingMethod: 'USPS First Class Package International',
                    shippingMethodPrice: 13.35
                }}
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
                            <div
                                className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                            >
                                <div>14203452887394308 Pending Order</div>
                                <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
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
        wrapper.setState({ id: '14203452887394308' })

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
                            <div
                                className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                            >
                                <div>14203452887394308 Pending Order</div>
                                <button className='btn btn-light w-25 bi bi-card-text mr-2 p-0' onClick={wrapper.instance().handleClick}></button>
                            </div>
                        </div>
                        <div className='col col-md-9 col-lg-10'>
                            <div className='m-2 mb-5'>
                                <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>OrderId: 14203452887394308</p>
                                <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>Date: {new Date('2024-01-24T09:12:32').toLocaleString('uk')}</p>
                                <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>Shipping Method: USPS First Class Package International £13.35</p>
                                <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>Payment Method: Credit Card</p>
                                <p className='m-0 p-1 alert alert-info font-weight-bold text-center'>Credit Card Number: *********3456</p>

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
})