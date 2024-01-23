import { Link } from 'react-router-dom'

import OrderHistory from './OrderHistory'

describe('(Component) OrderHistory', () => {
    it('should render component', () => {
        const orders = [
            { id: '14203452887394308', shipping_method: 'usps_fcpi', payment_method: 'credit_card', credit_card_type: 'visa', country: 'bg', items: [{ id: 1, image: 'cookiesAndCreamCake', name: { en: 'Cookies And Cream Cake', bg: 'Торта с бисквитки и крем' }, currency: { en: '£', bg: 'лв' }, price: 30, qty: 1 }], firstName: 'John', lastName: 'Smith', email: 'some@some.com', phoneNumber: '1234567890', billingAddress: '221B Baker Street', postCode: '123', creditCardNumber: '*********3456', expirationDate: '102028' }
        ]

        const wrapper = shallow(<OrderHistory orders={orders} />)

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
                        <div className='col-6 col-md-3 col-lg-2 border-right border-info'>
                            <p
                                role='button'
                                className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                            >
                                14203452887394308
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})