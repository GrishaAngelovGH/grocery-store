import { Preview } from './Preview'

describe('(Component) Preview', () => {
    it('should render component', () => {
        const items = [
            {
                'id': 1,
                'image': 'cookiesAndCreamCake',
                'description': { en: 'Cookies And Cream Cake' },
                'currency': { en: '£' },
                'price': 30,
                'qty': 1
            },
            {
                'id': 2,
                'image': 'dribbleCake',
                'description': { en: 'Dribble Cake' },
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
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center'>
                                Preview
                            </h1>
                        </div>
                    </div>

                    <div className='font-weight-bold'>
                        <div>{items[0].description.en}: {items[0].currency.en}30</div>
                    </div>

                    <div className='font-weight-bold'>
                        <div>{items[1].description.en}: {items[1].currency.en}70</div>
                    </div>

                    <div className='mt-2 font-weight-bold'>
                        ShippingMethod-1: £5.00
                    </div>

                    <div className='mt-2 font-weight-bold'>
                        Total: £105.00
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Place Order
                    </button>
                </div>
            </div>
        )).to.equal(true)
    })
})