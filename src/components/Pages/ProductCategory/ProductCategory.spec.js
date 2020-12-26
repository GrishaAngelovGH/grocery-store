import ProductItem from './ProductItem'
import HeaderSection from '../PageComponents/HeaderSection'

import ProductCategory from './ProductCategory'

describe('(Component) ProductCategory', () => {
    let wrapper, fetchAllItemsByCategory, addItemToShoppingCart

    const items = [
        {
            id: 1,
            name: 'Cookies And Cream Cake',
            image: 'cookiesAndCreamCake',
            label: 'Collect in 5 days',
            price: '£30.00',
            rating: 4
        }
    ]

    beforeEach(() => {
        fetchAllItemsByCategory = sinon.spy()
        addItemToShoppingCart = sinon.spy()

        wrapper = shallow(
            <ProductCategory
                items={items}
                match={{ params: { id: 'category-1' } }}
                fetchAllItemsByCategory={fetchAllItemsByCategory}
                addItemToShoppingCart={addItemToShoppingCart}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection />
                    <div className='row no-gutters'>
                        <div className='col-md-6 col-lg-3 d-flex justify-content-center'>
                            <ProductItem
                                id={items[0].id}
                                image={items[0].image}
                                imageLabel={items[0].label}
                                description={items[0].name}
                                price={items[0].price}
                                rating={items[0].rating}
                                addItemToShoppingCart={addItemToShoppingCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should fetch all items by category on mount', () => {
        fetchAllItemsByCategory.should.been.calledOnce
        fetchAllItemsByCategory.should.been.calledWith('category-1')
    })
})