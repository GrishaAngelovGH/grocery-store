import { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from 'react-sidebar'
import { NotificationContainer } from 'react-notifications'

import Logo from './Logo'
import Search from './Search'
import SidebarMenu from './SidebarMenu'
import Menu, { menuCategories } from './Menu'
import MiniShoppingBag from './MiniShoppingBag'

import { User } from 'components/Icons'

import './HeaderSection.scss'

class HeaderSection extends Component {
    state = {
        sidebarOpen: false
    }

    handleSidebarOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {
        const { disabledSearch, selectedCategory } = this.props

        return (
            <div>
                <NotificationContainer />

                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>
                    <div className='col-md-3'>
                        <Search disabled={disabledSearch} selectedCategory={selectedCategory} />
                    </div>

                    <div className='row justify-content-around align-items-center'>
                        <div className='col-md-1'>
                            <User />
                        </div>
                        <div className='col-md-1'>
                            <MiniShoppingBag />
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
                            <MiniShoppingBag />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search disabled={disabledSearch} selectedCategory={selectedCategory} />
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

HeaderSection.propTypes = {
    disabledSearch: PropTypes.bool,
    selectedCategory: PropTypes.string
}

export default HeaderSection