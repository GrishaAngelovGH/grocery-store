import ShoppingBagItem from './ShoppingBagItem'
import './ShoppingBagItems.scss'

const ShoppingBagItems = ({ items, lang, removeItemFromShoppingCart }) => (
    <div className='shopping-bag-items'>
        {
            items.map(v => (
                <ShoppingBagItem
                    key={v.id}
                    id={v.id}
                    image={v.image}
                    description={v.description[lang]}
                    currency={v.currency[lang]}
                    price={v.price}
                    qty={v.qty}
                    lang={lang}
                    removeItemFromShoppingCart={removeItemFromShoppingCart}
                />
            ))
        }
    </div>
)

export default ShoppingBagItems