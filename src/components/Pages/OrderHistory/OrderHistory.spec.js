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

                    <div className='row no-gutters bg-info align-items-center'>
                        <div className='col-10'>
                            <h1 className='m-0 text-white text-center p-1 ml-5'>Order History</h1>
                        </div>
                        <div className='col-2 text-center'>
                            <Link to='/' className='btn btn-light bi bi-arrow-left' />
                        </div>
                    </div>

                    <div className='font-weight-bold'>Orders: 1</div>
                </div>
            </div>
        )).to.equal(true)
    })
})