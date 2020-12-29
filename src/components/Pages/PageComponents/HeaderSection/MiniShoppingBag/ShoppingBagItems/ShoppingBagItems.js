import ShoppingBagItem from './ShoppingBagItem'
import './ShoppingBagItems.scss'

const ShoppingBagItems = ({ items, removeItemFromShoppingCart }) => (
    <div className='shopping-bag-items'>
        {
            items.map(v => (
                <ShoppingBagItem
                    key={v.id}
                    id={v.id}
                    image={v.image}
                    description={v.description}
                    currency={v.currency}
                    price={v.price}
                    qty={v.qty}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
            ))
        }
    </div>
)

export default ShoppingBagItems