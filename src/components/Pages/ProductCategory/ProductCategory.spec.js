import ProductCategory from './ProductCategory'

describe('(Component) ProductCategory', () => {
    it('should render component', () => {
        const wrapper = shallow(<ProductCategory />)

        expect(wrapper.equals(
            <div>product category</div>
        )).to.equal(true)
    })
})