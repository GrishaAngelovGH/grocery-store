import ProductCategory from './ProductCategory'

describe('(Component) ProductCategory', () => {
    let wrapper, fetchAllItemsByCategory
    const props = { match: { params: { id: 'category-1' } } }

    beforeEach(() => {
        fetchAllItemsByCategory = sinon.spy()

        wrapper = shallow(
            <ProductCategory
                {...props}
                fetchAllItemsByCategory={fetchAllItemsByCategory}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div>product category</div>
        )).to.equal(true)
    })

    it('should fetch all items by category on mount', () => {
        fetchAllItemsByCategory.should.been.calledOnce
        fetchAllItemsByCategory.should.been.calledWith('category-1')
    })
})