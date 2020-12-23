import { Component } from 'react'

import Logo from './Logo'
import Search from './Search'
import SidebarMenu from './SidebarMenu'
import Menu, { menuCategories } from './Menu'

import Sidebar from 'react-sidebar'
import { User, ShoppingBag } from 'components/Icons'

import './HeaderSection.scss'

class HeaderSection extends Component {
    state = {
        sidebarOpen: false
    }

    handleSidebarOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {

        return (
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
            </div>
        )
    }
}

export default HeaderSection