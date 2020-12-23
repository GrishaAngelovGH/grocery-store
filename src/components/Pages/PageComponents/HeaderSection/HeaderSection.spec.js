import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'

import Logo from './Logo'
import Search from './Search'
import SidebarMenu from './SidebarMenu'
import Menu, { menuCategories } from './Menu'

import HeaderSection from './HeaderSection'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HeaderSection />)

        expect(wrapper.equals(
            <div>
                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>
                    <div className='col-md-3'>
                        <Search />
                    </div>

                    <div className='row justify-content-around align-items-center'>
                        <div className='col-md-1'>
                            <User />
                        </div>
                        <div className='col-md-1'>
                            <ShoppingBag count={0} />
                        </div>
                    </div>
                </div>

                {/* Mobile and Tablet */}
                <div className='d-lg-none d-md-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-1 col-md-1'>
                        <Menu mobile onSidebarOpen={wrapper.instance().handleSidebarOpen} categories={menuCategories} />
                    </div>

                    <div className='col-1 col-md-1'>
                        <Logo />
                    </div>

                    <div className='row justify-content-around align-items-center'>
                        <div className='col-1 col-md-1'>
                            <User />
                        </div>
                        <div className='col-1 col-md-1'>
                            <ShoppingBag count={0} />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search />
                    </div>
                </div>

                <div className='d-none d-lg-block'>
                    <Menu categories={menuCategories} />
                </div>
            </div>
        )).to.equal(true)
    })

    it('should open Sidebar', () => {
        const wrapper = shallow(<HeaderSection />)

        const menu = wrapper.find(Menu).first()

        menu.simulate('sidebarOpen')

        expect(wrapper.equals(
            <div>
                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>
                    <div className='col-md-3'>
                        <Search />
                    </div>

                    <div className='row justify-content-around align-items-center'>
                        <div className='col-md-1'>
                            <User />
                        </div>
                        <div className='col-md-1'>
                            <ShoppingBag count={0} />
                        </div>
                    </div>
                </div>

                {/* Mobile and Tablet */}
                <div className='d-lg-none d-md-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-1 col-md-1'>
                        <Menu mobile onSidebarOpen={wrapper.instance().handleSidebarOpen} categories={menuCategories} />
                    </div>

                    <div className='col-1 col-md-1'>
                        <Logo />
                    </div>

                    <div className='row justify-content-around align-items-center'>
                        <div className='col-1 col-md-1'>
                            <User />
                        </div>
                        <div className='col-1 col-md-1'>
                            <ShoppingBag count={0} />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search />
                    </div>
                </div>

                <div className='d-none d-lg-block'>
                    <Menu categories={menuCategories} />
                </div>

                <Sidebar
                    rootClassName='position-fixed sidebar-container'
                    sidebar={
                        <SidebarMenu
                            categories={menuCategories}
                            onSidebarOpen={wrapper.instance().handleSidebarOpen}
                        />
                    }
                    open={true}
                    onSetOpen={wrapper.instance().handleSidebarOpen}
                    styles={{
                        sidebar: {
                            background: 'white',
                            width: 250
                        }
                    }}
                >
                    <div></div>
                </Sidebar>
            </div>
        )).to.equal(true)
    })
})