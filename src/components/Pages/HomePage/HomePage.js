import { Component } from 'react'
import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'
import {
    groceryStoreBanner,
    winesBanner,
    specialWineBanner,
    flowersBanner
} from 'images'

import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'
import FreeShoppingBanner from './FreeShoppingBanner'
import PromoProducts from './PromoProducts'
import HelpLinks from './HelpLinks'
import {
    DeliveryButton,
    NextDayDeliveryButton,
    ReturnDeliveryButton
} from './HelpButtons'

import './HomePage.scss'

const menuCategories = [
    { title: 'Title1', subCategories: ['Category1', 'Category2', 'Category3'] },
    { title: 'Title2', subCategories: ['Category4', 'Category5', 'Category6'] }
]

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

                    <PromoProducts products={promoProducts} />
                </div>
            </div>
        )
    }
}

export default HomePage