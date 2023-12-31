import { Link } from 'react-router-dom'

import FeatureMenu from './FeatureMenu'
import { Menu } from './Menu'

describe('(Component) Menu', () => {
    let wrapper

    const featureMenu = {
        items: [
            {
                image: 'image 1',
                title: 'Item 1',
                description: 'Description 1',
                link: 'Link 1'
            }
        ],
        buttonLabel: 'ButtonLabel1'
    }

    const categories = {
        en: [
            {
                title: 'Title1',
                featureMenu: featureMenu,
                subCategories: [
                    {
                        title: 'SubCategory1',
                        categories: [
                            { value: 'category11', link: '/category/category11' }
                        ]
                    }
                ]
            },
            {
                title: 'Title2',
                featureMenu: featureMenu,
                subCategories: [
                    {
                        title: 'SubCategory2',
                        categories: [
                            { value: 'category22', link: '/category/category22' }
                        ]
                    }
                ]
            }
        ]
    }

    beforeEach(() => {
        wrapper = shallow(
            <Menu lang={'en'} categories={categories} />
        )
    })

    it('should render Menu', () => {
        expect(wrapper.equals(
            <div className='row no-gutters menu-container'>
                <div className='col-md-12'>
                    <nav className='navbar navbar-expand-lg navbar-light'>

                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item' onMouseEnter={wrapper.instance().handleMouseEnter}>
                                    <a id={'Title1'} className='nav-link' href='#'>Title1</a>
                                </li>
                                <li className='nav-item' onMouseEnter={wrapper.instance().handleMouseEnter}>
                                    <a id={'Title2'} className='nav-link' href='#'>Title2</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render mobile Menu', () => {
        const onSidebarOpen = sinon.spy()

        const wrapper = shallow(
            <Menu
                mobile
                onSidebarOpen={onSidebarOpen}
                categories={categories}
            />
        )

        expect(wrapper.equals(
            <div className='row no-gutters menu-container'>
                <div className='col-md-12'>
                    <nav className='navbar navbar-expand-lg navbar-light'>

                        <button className='navbar-toggler' type='button' onClick={onSidebarOpen} data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </nav>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render subCategories on title hover', () => {
        const secondItem = wrapper.find('li').at(1)
        const event = { target: { id: secondItem.props().children.props.id } }

        secondItem.simulate('mouseEnter', event)

        expect(wrapper.equals(
            <div className='row no-gutters menu-container'>
                <div className='col-md-12'>
                    <nav className='navbar navbar-expand-lg navbar-light'>

                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item' onMouseEnter={wrapper.instance().handleMouseEnter}>
                                    <a id={'Title1'} className='nav-link' href='#'>Title1</a>
                                </li>
                                <li className='nav-item' onMouseEnter={wrapper.instance().handleMouseEnter}>
                                    <a id={'Title2'} className='nav-link' href='#'>Title2</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='row no-gutters justify-content-center subcategories'>
                        <div className='col-md-11 d-flex border bg-white'>
                            <div className='d-flex flex-column justify-content-around small text-uppercase font-weight-bold text-center alert alert-primary m-2' role='alert'>
                                <div>Only the following items are available</div>
                                <div>{'Food > Celebration Cakes > All cakes'}</div>
                            </div>
                            <div className='subcategory m-2'>
                                <div className='small font-weight-bold'>
                                    SubCategory2
                                </div>
                                <Link className='small d-block' to='/category/category22'>category22</Link>
                            </div>
                            <FeatureMenu items={featureMenu.items} buttonLabel={featureMenu.buttonLabel} />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})