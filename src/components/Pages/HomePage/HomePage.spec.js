import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'
import {
    groceryStoreBanner,
    winesBanner,
    specialWineBanner,
    flowersBanner
} from 'images'

import { Logo, Search } from '../PageComponents'
import Menu, { menuCategories } from './Menu'
import SidebarMenu from './SidebarMenu'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts from './PromoProducts'
import PromoDeals from './PromoDeals'
import HelpLinks from './HelpLinks'

import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import HomePage from './HomePage'

const promoProducts = [
    {
        image: winesBanner,
        imageLabel: 'Special offers',
        description: 'Save up to 1/3 on selected wines',
        linkTitle: 'Shop wine by the case'
    },
    {
        image: specialWineBanner,
        imageLabel: 'Limited offers',
        description: 'Save up to 20% on selected wines',
        linkTitle: 'Shop wine by the case'
    },
    {
        image: flowersBanner,
        imageLabel: 'Free delivery',
        description: 'Save £5 on selected bouquets',
        linkTitle: 'Shop now'
    }
]

const promoDeals = [
    {
        category: 'offers',
        description: 'see all offers',
        linkTitle: 'Shop now'
    },
    {
        category: 'women',
        description: '30% off selected womenswear',
        linkTitle: 'Shop the offer'
    },
    {
        category: 'lingerie',
        description: '30% off selected nightwear',
        linkTitle: 'Shop the offer'
    },
    {
        category: 'men',
        description: '2 for £60 on lambswool jumpers',
        linkTitle: 'Shop the offer'
    },
    {
        category: 'women',
        description: '30% of boots',
        linkTitle: 'Shop the offer'
    }
]

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

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

                    <PromoProducts products={promoProducts} />

                    <PromoDeals promoDeals={promoDeals} />
                </div>
            </div>
        )).to.equal(true)
    })

    it('should open Sidebar', () => {
        const wrapper = shallow(<HomePage />)

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

                    <PromoProducts products={promoProducts} />

                    <PromoDeals promoDeals={promoDeals} />
                </div>
            </div>
        )).to.equal(true)
    })
})