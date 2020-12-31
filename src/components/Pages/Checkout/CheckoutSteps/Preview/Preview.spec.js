import Preview from './Preview'

describe('(Component) Preview', () => {
    it('should render component', () => {
        const items = [
            {
                'id': 1,
                'image': 'cookiesAndCreamCake',
                'description': 'Cookies And Cream Cake',
                'currency': '£',
                'price': 30,
                'qty': 1
            },
            {
                'id': 2,
                'image': 'dribbleCake',
                'description': 'Dribble Cake',
                'currency': '£',
                'price': 35,
                'qty': 2
            }
        ]
        const wrapper = shallow(<Preview items={items} />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-5'>
                    <div className='font-weight-bold'>
                        <div>{items[0].description} {`(${items[0].currency}${30})`}</div>
                    </div>
                    <div className='font-weight-bold'>
                        <div>{items[1].description} {`(${items[1].currency}${70})`}</div>
                    </div>
                    <div className='mt-2 font-weight-bold'>
                        TOTAL: {'£'}{100}
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Place Order
                </button>
                </div>
            </div>
        )).to.equal(true)
    })
})