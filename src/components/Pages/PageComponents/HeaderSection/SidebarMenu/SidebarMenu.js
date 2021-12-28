import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import { Delete, ChevronLeft } from 'components/Icons'

import translate from 'translate'

export class SidebarMenu extends Component {
    state = { category: '', subCategories: [] }

    handleMenuClick = ({ target }) => {
        const subCategories = this.props.categories[this.props.lang].find(v => v.title === target.id).subCategories
        this.setState({ subCategories, category: target.id })
    }

    handleBackClick = () => {
        this.setState({ subCategories: [] })
    }

    render() {
        const { lang, strings, categories, onSidebarOpen } = this.props
        const { category, subCategories } = this.state

        return (
            <div>
                <div className='d-flex border-bottom justify-content-between'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
                </div>

                <div className='small text-uppercase font-weight-bold text-center alert alert-primary' role='alert'>
                    <div>{strings.availableItems}</div>
                    <div>{strings.links}</div>
                </div>

                {
                    subCategories.length === 0 && categories[lang].map(v => (
                        <div
                            key={v.title}
                            id={v.title}
                            onClick={this.handleMenuClick}
                            className='border-bottom text-secondary m-2'
                        >
                            {v.title}
                        </div>
                    ))
                }
                {
                    subCategories.length > 0 && (
                        <div>
                            <div
                                onClick={this.handleBackClick}
                                className='font-weight-bold m-2 d-flex align-items-center'
                            >
                                <ChevronLeft />
                                <div className='pt-1'>{strings.allCategories}</div>
                            </div>
                            <div className='bg-dark text-center text-white p-2'>
                                {category}
                            </div>
                        </div>
                    )
                }
                {
                    subCategories.length > 0 && subCategories.map(v => (
                        <div key={v.title}>
                            <div className='bg-secondary text-white p-2 text-center'>
                                {v.title}
                            </div>
                            {
                                v.categories.map(({ value, link }) => {
                                    return (
                                        <Link
                                            key={link}
                                            to={link}
                                            className='border-bottom text-secondary m-2 d-block'
                                        >
                                            {value}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

SidebarMenu.propTypes = {
    strings: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    onSidebarOpen: PropTypes.func.isRequired
}

SidebarMenu.defaultProps = {
    strings: {
        availableItems: 'Only the following items are available',
        links: 'Food > Celebration Cakes > All cakes',
        allCategories: 'All Categories'
    }
}

export default translate('Pages.PageComponents.HeaderSection.SidebarMenu')(SidebarMenu)