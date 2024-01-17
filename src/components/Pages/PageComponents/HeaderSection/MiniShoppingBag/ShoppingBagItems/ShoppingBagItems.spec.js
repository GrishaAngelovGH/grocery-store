import ShoppingBagItem from './ShoppingBagItem'
import ShoppingBagItems from './ShoppingBagItems'

describe('(Component) ShoppingBagItems', () => {
    it('should render component', () => {
        const items = [
            {
                id: 1,
                image: 'cookiesAndCreamCake',
                name: { en: 'Cookies And Cream Cake' },
                price: 5,
                currency: { en: '£' },
                qty: 1
            },
            {
                id: 2,
                image: 'dribbleCake',
                name: { en: 'Dribble Cake' },
                price: 10,
                currency: { en: '£' },
                qty: 2
            }
        ]

        const removeItemFromShoppingCart = sinon.spy()

        const wrapper = shallow(
            <ShoppingBagItems
                items={items}
                lang={'en'}
                removeItemFromShoppingCart={removeItemFromShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='shopping-bag-items'>
                <ShoppingBagItem
                    id={items[0].id}
                    image={items[0].image}
                    name={items[0].name.en}
                    currency={items[0].currency.en}
                    price={items[0].price}
                    qty={items[0].qty}
                    lang={'en'}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
                <ShoppingBagItem
                    id={items[1].id}
                    image={items[1].image}
                    name={items[1].name.en}
                    currency={items[1].currency.en}
                    price={items[1].price}
                    qty={items[1].qty}
                    lang={'en'}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
            </div>
        )).to.equal(true)
    })
})