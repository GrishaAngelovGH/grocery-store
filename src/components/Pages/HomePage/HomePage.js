import { Component } from 'react'
import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'
import {
    groceryStoreBanner
} from 'images'

import Logo from './Logo'
import Search from './Search'
import Menu, { menuCategories } from './Menu'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts, { promoProductItems } from './PromoProducts'
import PromoDeals from './PromoDeals'
import HelpLinks from './HelpLinks'
import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import './HomePage.scss'

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
                                sidebar={<div>content</div>}
                                open={this.state.sidebarOpen}
                                onSetOpen={this.handleSidebarOpen}
                                styles={{
                                    sidebar: {
                                        background: 'white',
                                        width: 150
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

                    <PromoDeals promoDeals={promoDeals} />
                </div>
            </div>
        )
    }
}

export default HomePage