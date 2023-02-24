import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FeatureMenu from './FeatureMenu'

import './Menu.scss'
import translate from 'translate'

export class Menu extends Component {
    state = { subCategories: [], featureMenu: { items: [] } }

    handleMouseEnter = ({ target }) => {
        const title = target.id
        const categories = this.props.categories[this.props.lang].find(v => v.title === title)
        const { subCategories, featureMenu } = categories
        this.setState({ subCategories, featureMenu })
    }

    render() {
        const { lang, strings, mobile, categories, onSidebarOpen } = this.props
        const { subCategories, featureMenu } = this.state

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
                                            categories[lang].map(v => (
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
                        !mobile && subCategories.length > 0 && (
                            <div className='row no-gutters justify-content-center subcategories'>
                                <div className='col-md-11 d-flex border bg-white'>
                                    <div className='d-flex flex-column justify-content-around small text-uppercase font-weight-bold text-center alert alert-primary m-2' role='alert'>
                                        <div>{strings.availableItems}</div>
                                        <div>{strings.links}</div>
                                    </div>

                                    {
                                        subCategories.map(v => (
                                            <div key={v.title} className='subcategory m-2'>
                                                <div className='small font-weight-bold'>
                                                    {v.title}
                                                </div>
                                                {
                                                    v.categories.map(({ value, link }) => (
                                                        <Link key={link} className='small d-block' to={link}>
                                                            {value}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                    <FeatureMenu items={featureMenu.items} buttonLabel={featureMenu.buttonLabel} />
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
    strings: PropTypes.object.isRequired,
    mobile: PropTypes.bool,
    onSidebarOpen: PropTypes.func,
    categories: PropTypes.object.isRequired
}

Menu.defaultProps = {
    strings: {
        availableItems: 'Only the following items are available',
        links: 'Food > Celebration Cakes > All cakes'
    }
}

export default translate('Pages.PageComponents.HeaderSection.Menu')(Menu)