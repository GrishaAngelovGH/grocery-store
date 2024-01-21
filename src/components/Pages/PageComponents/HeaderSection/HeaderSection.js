import { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from 'react-sidebar'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import Search from './Search'
import SidebarMenu from './SidebarMenu'
import Menu, { menuCategories } from './Menu'
import MiniShoppingBag from './MiniShoppingBag'

import './HeaderSection.scss'

export class HeaderSection extends Component {
    state = {
        sidebarOpen: false
    }

    handleSidebarOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {
        const { lang, disabledSearch, disabledOrderHistory, selectedCategory } = this.props

        return (
            <div>
                <ToastContainer />

                {/* Desktop */}
                <div className='d-none d-lg-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-md-1'>
                        <Logo />
                    </div>

                    <div className='col-md-3'>
                        <Search disabled={disabledSearch} selectedCategory={selectedCategory} />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-1 mr-1'>
                            <Link to='/order-history' className={`${disabledOrderHistory ? 'pe-none text-secondary' : 'pe-auto text-dark'}`} >
                                <i className='bi bi-card-checklist h2 align-text-top'></i>
                            </Link>
                        </div>
                        <div className='col-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>
                </div>

                <div className='d-none d-lg-block'>
                    <Menu lang={lang} categories={menuCategories} />
                </div>

                {/* Mobile and Tablet */}
                <div className='d-lg-none d-md-flex row no-gutters justify-content-around align-items-center'>
                    <div className='col-1'>
                        <Menu lang={lang} mobile onSidebarOpen={this.handleSidebarOpen} categories={menuCategories} />
                    </div>

                    <div className='col-1'>
                        <Logo />
                    </div>

                    <div className='row justify-content-center align-items-center'>
                        <div className='col-1 mr-1'>
                            <Link to='/order-history' className={`${disabledOrderHistory ? 'pe-none text-secondary' : 'pe-auto text-dark'}`}>
                                <i className='bi bi-card-checklist h2 align-text-top'></i>
                            </Link>
                        </div>
                        <div className='col-1'>
                            <MiniShoppingBag />
                        </div>
                    </div>

                    <div className='col-8 col-md-10'>
                        <Search disabled={disabledSearch} selectedCategory={selectedCategory} />
                    </div>
                </div>

                {
                    this.state.sidebarOpen && (
                        <Sidebar
                            rootClassName='position-fixed sidebar-container'
                            sidebar={
                                <SidebarMenu
                                    lang={lang}
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
    lang: PropTypes.string.isRequired,
    disabledSearch: PropTypes.bool,
    disabledOrderHistory: PropTypes.bool,
    selectedCategory: PropTypes.string
}

HeaderSection.defaultProps = {
    lang: 'en'
}

export default HeaderSection