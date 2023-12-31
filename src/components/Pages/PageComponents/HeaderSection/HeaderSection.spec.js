import Sidebar from 'react-sidebar'
import { ToastContainer } from 'react-toastify'

import Logo from './Logo'
import Search from './Search'
import SidebarMenu from './SidebarMenu'
import MiniShoppingBag from './MiniShoppingBag'
import Menu, { menuCategories } from './Menu'

import { HeaderSection } from './HeaderSection'

describe('(Component) HeaderSection', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <HeaderSection
                disabledSearch={false}
                selectedCategory={'selectedCategory'}
            />
        )

        expect(wrapper.equals(
            <div>
                <ToastContainer />

                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>

                    <div className='col-md-3'>
                        <Search disabled={false} selectedCategory={'selectedCategory'} />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-1'>
                            <i className='bi bi-person h2 align-text-top'></i>
                        </div>
                        <div className='col-md-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>
                </div>

                <div className='d-none d-lg-block'>
                    <Menu lang={'en'} categories={menuCategories} />
                </div>

                {/* Mobile and Tablet */}
                <div className='d-lg-none d-md-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-1 col-md-1'>
                        <Menu lang={'en'} mobile onSidebarOpen={wrapper.instance().handleSidebarOpen} categories={menuCategories} />
                    </div>

                    <div className='col-1 col-md-1'>
                        <Logo />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-1 col-md-1'>
                            <i className='bi bi-person h2 align-text-top'></i>
                        </div>
                        <div className='col-1 col-md-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search disabled={false} selectedCategory={'selectedCategory'} />
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should open Sidebar', () => {
        const wrapper = shallow(
            <HeaderSection
                disabledSearch={false}
                selectedCategory={'selectedCategory'}
            />
        )

        const menu = wrapper.find(Menu).at(1)

        menu.simulate('sidebarOpen')

        expect(wrapper.equals(
            <div>
                <ToastContainer />

                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>

                    <div className='col-md-3'>
                        <Search disabled={false} selectedCategory={'selectedCategory'} />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-1'>
                            <i className='bi bi-person h2 align-text-top'></i>
                        </div>
                        <div className='col-md-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>
                </div>

                <div className='d-none d-lg-block'>
                    <Menu lang={'en'} categories={menuCategories} />
                </div>

                {/* Mobile and Tablet */}
                <div className='d-lg-none d-md-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-1 col-md-1'>
                        <Menu lang={'en'} mobile onSidebarOpen={wrapper.instance().handleSidebarOpen} categories={menuCategories} />
                    </div>

                    <div className='col-1 col-md-1'>
                        <Logo />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-1 col-md-1'>
                            <i className='bi bi-person h2 align-text-top'></i>
                        </div>
                        <div className='col-1 col-md-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search disabled={false} selectedCategory={'selectedCategory'} />
                    </div>
                </div>

                <Sidebar
                    rootClassName='position-fixed sidebar-container'
                    sidebar={
                        <SidebarMenu
                            lang={'en'}
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