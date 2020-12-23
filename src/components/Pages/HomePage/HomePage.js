import { Component } from 'react'
import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'
import {
    groceryStoreBanner
} from 'images'

import { Logo, Search } from '../PageComponents'
import Menu, { menuCategories } from './Menu'
import SidebarMenu from './SidebarMenu'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts, { promoProductItems } from './PromoProducts'
import PromoDeals, { promoDealItems } from './PromoDeals'
import HelpLinks from './HelpLinks'
import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import './HomePage.scss'

class HomePage extends Component {
    state = {
        sidebarOpen: false
    }

    handleSidebarOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {
        return (
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
                            <Menu mobile onSidebarOpen={this.handleSidebarOpen} categories={menuCategories} />
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

                    {
                        this.state.sidebarOpen && (
                            <Sidebar
                                rootClassName='position-fixed sidebar-container'
                                sidebar={
                                    <SidebarMenu
                                        categories={menuCategories}
                                        onSidebarOpen={this.handleSidebarOpen}
                                    />
                                }
                                open={this.state.sidebarOpen}
                                onSetOpen={this.handleSidebarOpen}
                                styles={{
                                    sidebar: {
                                        background: 'white',
                                        width: 250
                                    }
                                }}
                            >
                                <div></div>
                            </Sidebar>
                        )
                    }

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

                    <PromoProducts products={promoProductItems} />

                    <PromoDeals promoDeals={promoDealItems} />
                </div>
            </div>
        )
    }
}

export default HomePage