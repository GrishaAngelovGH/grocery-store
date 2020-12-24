import { addItemToShoppingCart } from './shoppingCart'

describe('(Action) shoppingCart', () => {
    it('should create action addItemToShoppingCart', () => {
        const item = {
            image: 'image',
            description: 'description',
            price: 'price'
        }

        const action = addItemToShoppingCart(item)

        expect(action).to.eql({
            type: 'ADD_ITEM_TO_SHOPPING_CART',
            item: item
        })
    })
})