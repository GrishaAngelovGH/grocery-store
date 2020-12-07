import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div>Home Page</div>
        )).to.equal(true)
    })
})