import Logo from './Logo'
import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div>
                <Logo />
            </div>
        )).to.equal(true)
    })
})