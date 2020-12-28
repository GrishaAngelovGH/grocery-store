import ShoppingBagItem from './ShoppingBagItem'
import ShoppingBagItems from './ShoppingBagItems'

describe('(Component) ShoppingBagItems', () => {
    it('should render component', () => {
        const items = [
            { id: 1, image: 'cookiesAndCreamCake', description: 'description-1', price: '£5', qty: 1 },
            { id: 2, image: 'dribbleCake', description: 'description-2', price: '£10', qty: 2 }
        ]

        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <ShoppingBagItems
                items={items}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='shopping-bag-items'>
                <ShoppingBagItem
                    id={items[0].id}
                    image={items[0].image}
                    description={items[0].description}
                    price={items[0].price}
                    qty={items[0].qty}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
                <ShoppingBagItem
                    id={items[1].id}
                    image={items[1].image}
                    description={items[1].description}
                    price={items[1].price}
                    qty={items[1].qty}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
            </div>
        )).to.equal(true)
    })
})