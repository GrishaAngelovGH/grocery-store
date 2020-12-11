import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'
import { groceryStoreBanner } from 'images'

import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'
import FreeShoppingBanner from './FreeShoppingBanner'
import HelpLinks from './HelpLinks'

import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import HomePage from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        const menuCategories = [
            { title: 'Title1', subCategories: ['Category1', 'Category2', 'Category3'] },
            { title: 'Title2', subCategories: ['Category4', 'Category5', 'Category6'] }
        ]

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
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

                    <HelpLinks />

                    <img src={groceryStoreBanner} className='img-fluid w-100 mt-2' />

                    <div className='row no-gutters justify-content-around m-2'>
                        <div className='col-md-3'>
                            <DeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <NextDayDeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <ReturnDeliveryButton />
                        </div>
                    </div>

                    <FreeShoppingBanner />
                </div>
            </div>
        )).to.equal(true)
    })

    it('should open Sidebar', () => {
        const wrapper = shallow(<HomePage />)

        const menuCategories = [
            { title: 'Title1', subCategories: ['Category1', 'Category2', 'Category3'] },
            { title: 'Title2', subCategories: ['Category4', 'Category5', 'Category6'] }
        ]

        const menu = wrapper.find(Menu).first()

        menu.simulate('sidebarOpen')

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
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
                        sidebar={<div>content</div>}
                        open={true}
                        onSetOpen={wrapper.instance().handleSidebarOpen}
                        styles={{
                            sidebar: {
                                background: 'white',
                                width: 150
                            }
                        }}
                    >
                        <div></div>
                    </Sidebar>

                    <HelpLinks />

                    <img src={groceryStoreBanner} className='img-fluid w-100 mt-2' />

                    <div className='row no-gutters justify-content-around m-2'>
                        <div className='col-md-3'>
                            <DeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <NextDayDeliveryButton />
                        </div>
                        <div className='col-md-3'>
                            <ReturnDeliveryButton />
                        </div>
                    </div>

                    <FreeShoppingBanner />
                </div>
            </div>
        )).to.equal(true)
    })
})