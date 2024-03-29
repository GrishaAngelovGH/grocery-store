import ProductItem from './ProductItem'
import EmptyProductCategory from './EmptyProductCategory'
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
            currency: '£',
            price: 30.00,
            rating: 4
        }
    ]

    beforeEach(() => {
        fetchAllItemsByCategory = sinon.spy()
        addItemToShoppingCart = sinon.spy()

        wrapper = shallow(
            <ProductCategory
                items={items}
                filteredItems={[]}
                lang="en"
                categoryId={'all-cakes'}
                fetchAllItemsByCategory={fetchAllItemsByCategory}
                addItemToShoppingCart={addItemToShoppingCart}
            />
        )
    })

    it('should render component with all items', () => {
        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection selectedCategory={'all-cakes'} />

                    <h1 className='text-secondary text-center text-capitalize border bg-light p-1 mt-3'>
                        All Cakes
                    </h1>

                    <div className='row no-gutters'>
                        <div className='col-md-6 col-lg-3 d-flex justify-content-center'>
                            <ProductItem
                                id={items[0].id}
                                categoryId={'all-cakes'}
                                image={items[0].image}
                                imageLabel={items[0].label}
                                name={items[0].name}
                                currency={items[0].currency}
                                price={items[0].price}
                                rating={items[0].rating}
                                lang={'en'}
                                addItemToShoppingCart={addItemToShoppingCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render component with filtered items', () => {
        const filteredItems = [
            {
                id: 2,
                name: 'Dribble Cake',
                image: 'dribbleCake',
                label: 'Collect in 6 days',
                currency: '£',
                price: 35.00,
                rating: 5
            }
        ]

        wrapper = shallow(
            <ProductCategory
                items={items}
                filteredItems={filteredItems}
                categoryId={'all-cakes'}
                lang="en"
                fetchAllItemsByCategory={fetchAllItemsByCategory}
                addItemToShoppingCart={addItemToShoppingCart}
            />
        )

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <HeaderSection selectedCategory={'all-cakes'} />

                    <h1 className='text-secondary text-center text-capitalize border bg-light p-1 mt-3'>
                        All Cakes
                    </h1>

                    <div className='row no-gutters'>
                        <div className='col-md-6 col-lg-3 d-flex justify-content-center'>
                            <ProductItem
                                id={filteredItems[0].id}
                                categoryId={'all-cakes'}
                                image={filteredItems[0].image}
                                imageLabel={filteredItems[0].label}
                                name={filteredItems[0].name}
                                currency={filteredItems[0].currency}
                                price={filteredItems[0].price}
                                rating={filteredItems[0].rating}
                                lang={'en'}
                                addItemToShoppingCart={addItemToShoppingCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render EmptyProductCategory when items are not available', () => {
        const wrapper = shallow(
            <ProductCategory
                items={[]}
                filteredItems={[]}
                lang="en"
                categoryId={'all-cakes'}
                fetchAllItemsByCategory={fetchAllItemsByCategory}
                addItemToShoppingCart={addItemToShoppingCart}
            />
        )

        expect(wrapper.equals(
            <EmptyProductCategory />
        )).to.equal(true)
    })

    it('should fetch all items by category on mount', () => {
        fetchAllItemsByCategory.should.been.calledOnce
        fetchAllItemsByCategory.should.been.calledWith('all-cakes')
    })
})