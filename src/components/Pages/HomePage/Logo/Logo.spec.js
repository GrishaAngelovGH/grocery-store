import Logo from './Logo'

describe('(Component) Logo', () => {
    it('should render component', () => {
        const wrapper = shallow(<Logo />)

        expect(wrapper.equals(
            <div className='d-flex text-center'>
                <div className='m-3'>
                    <h1 className='m-0'>G&S</h1>
                    <div className='text-uppercase small'>est. 1883</div>
                </div>
            </div>
        )).to.equal(true)
    })
})