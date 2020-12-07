import Logo from './Logo'
import Search from './Search'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <div className='row no-gutters justify-content-around align-items-center'>
                        <div className='col-md-1'>
                            <Logo />
                        </div>
                        <div className='col-md-3'>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})