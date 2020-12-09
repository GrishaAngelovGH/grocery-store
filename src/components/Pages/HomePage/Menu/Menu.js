import { Component } from 'react'
import PropTypes from 'prop-types'

import './Menu.scss'

class Menu extends Component {
    state = { subCategories: [] }

    handleMouseEnter = ({ target }) => {
        const title = target.id
        const subCategories = this.props.categories.find(v => v.title === title).subCategories
        this.setState({ subCategories })
    }

    render() {
        const { mobile, categories, onSidebarOpen } = this.props
        const { subCategories } = this.state

        return (
            <div className='row no-gutters menu-container'>
                <div className='col-md-12'>
                    <nav className='navbar navbar-expand-lg navbar-light'>

                        <button className='navbar-toggler' type='button' onClick={onSidebarOpen} data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        {
                            !mobile && (
                                <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                                    <ul className='navbar-nav'>
                                        {
                                            categories.map(v => (
                                                <li key={v.title} className='nav-item' onMouseEnter={this.handleMouseEnter}>
                                                    <a id={v.title} className='nav-link' href='#'>{v.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </nav>

                    {
                        !mobile && (
                            <div className='row justify-content-center subcategories'>
                                <div className='col-md-6 d-flex justify-content-between border'>
                                    {
                                        subCategories.map(v => <div key={v}>{v}</div>)
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    mobile: PropTypes.bool,
    onSidebarOpen: PropTypes.func,
    categories: PropTypes.array.isRequired
}

export default Menu