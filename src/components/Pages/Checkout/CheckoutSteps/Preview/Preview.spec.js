import { Preview } from './Preview'

import Table from 'components/Table'
import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

describe('(Component) Preview', () => {
    it('should render component', () => {
        const items = [
            {
                'id': 1,
                'image': 'cookiesAndCreamCake',
                'name': { en: 'Cookies And Cream Cake' },
                'currency': { en: '£' },
                'price': 30,
                'qty': 1
            },
            {
                'id': 2,
                'image': 'dribbleCake',
                'name': { en: 'Dribble Cake' },
                'currency': { en: '£' },
                'price': 35,
                'qty': 2
            }
        ]

        const wrapper = shallow(
            <Preview
                lang={'en'}
                items={items}
                shippingMethod={'ShippingMethod-1'}
                shippingMethodPrice={5}
            />
        )

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <StepTitle>
                        Preview
                    </StepTitle>

                    <Table
                        columns={['Item', 'Qty', 'Price', 'Subtotal']}
                        data={[
                            ['Cookies And Cream Cake', 1, '£30', '£30'],
                            ['Dribble Cake', 2, '£35', '£70']
                        ]}
                    />

                    <Table
                        columns={['Shipping Method', 'Price']}
                        data={[[
                            'ShippingMethod-1',
                            '£5.00'
                        ]]}
                    />

                    <h3 className='font-weight-bold text-center'>
                        Total: £105.00
                    </h3>

                    <button type='submit' className='btn btn-light btn-block border border-secondary shadow mb-3'>
                        Place Order
                    </button>
                </div>
            </div>
        )).to.equal(true)
    })
})