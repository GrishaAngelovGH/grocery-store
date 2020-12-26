import { cakeProductCategory } from 'images'

import './ShoppingBagItems.scss'

const ShoppingBagItems = ({ items }) => (
    <div className='shopping-bag-items'>
        {
            items.map(v => (
                <div key={v.description} className='d-flex p-3'>
                    <img src={cakeProductCategory[v.image]} width={100} height={100} />

                    <div className='d-flex flex-column ml-3 font-weight-bold'>
                        <div>{v.description}</div>
                        <div>{v.price}</div>

                        <div className='d-flex flex-column font-weight-bold mt-4'>
                            <div>Qty: 1</div>
                            <div>Remove</div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
)

export default ShoppingBagItems