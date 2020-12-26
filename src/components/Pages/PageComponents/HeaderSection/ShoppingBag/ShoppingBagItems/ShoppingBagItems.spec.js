import { cakeProductCategory } from 'images'

import ShoppingBagItems from './ShoppingBagItems'

describe('(Component) ShoppingBagItems', () => {
    it('should render component', () => {
        const items = [
            { image: 'cookiesAndCreamCake', description: 'description-1', price: 'price-1', qty: 1 },
            { image: 'dribbleCake', description: 'description-2', price: 'price-2', qty: 2 }
        ]

        const wrapper = shallow(<ShoppingBagItems items={items} />)

        expect(wrapper.equals(
            <div className='shopping-bag-items'>
                <div className='d-flex p-3'>
                    <img src={cakeProductCategory[items[0].image]} width={100} height={100} />

                    <div className='d-flex flex-column ml-3 font-weight-bold'>
                        <div>{items[0].description}</div>
                        <div>{items[0].price}</div>

                        <div className='d-flex flex-column font-weight-bold mt-4'>
                            <div>Qty: 1</div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex p-3'>
                    <img src={cakeProductCategory[items[1].image]} width={100} height={100} />

                    <div className='d-flex flex-column ml-3 font-weight-bold'>
                        <div>{items[1].description}</div>
                        <div>{items[1].price}</div>

                        <div className='d-flex flex-column font-weight-bold mt-4'>
                            <div>Qty: 2</div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})