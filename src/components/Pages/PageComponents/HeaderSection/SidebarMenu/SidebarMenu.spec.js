import { Link } from 'react-router-dom'

import { Delete, ChevronLeft } from 'components/Icons'

import Logo from '../Logo'
import SidebarMenu from './SidebarMenu'

describe('(Component) SidebarMenu', () => {
    let wrapper, onSidebarOpen

    const featureMenu = {
        items: [
            {
                image: 'image',
                title: 'title',
                description: 'description',
                link: 'link'
            }
        ],
        buttonLabel: 'buttonLabel'
    }

    const menuCategories = [
        {
            title: 'Category1',
            featureMenu: featureMenu,
            subCategories: [
                {
                    title: 'Title1',
                    categories: [
                        'Category1-1'
                    ]
                }
            ]
        },
        {
            title: 'Category2',
            featureMenu: featureMenu,
            subCategories: [
                {
                    title: 'Title2',
                    categories: [
                        'Some Category'
                    ]
                }
            ]
        }
    ]

    beforeEach(() => {
        onSidebarOpen = sinon.spy()

        wrapper = shallow(
            <SidebarMenu
                categories={menuCategories}
                onSidebarOpen={onSidebarOpen}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom justify-content-between'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
                </div>

                <div className='small text-uppercase font-weight-bold text-center alert alert-primary' role='alert'>
                    <div>Only the following items are available</div>
                    <div>{`Food > Celebration Cakes > All cakes`}</div>
                </div>

                <div
                    id={'Category1'}
                    onClick={wrapper.instance().handleMenuClick}
                    className='border-bottom text-secondary m-2'
                >
                    Category1
                </div>
                <div
                    id={'Category2'}
                    onClick={wrapper.instance().handleMenuClick}
                    className='border-bottom text-secondary m-2'
                >
                    Category2
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle Menu close click', () => {
        const closeButton = wrapper.find(Delete)

        closeButton.simulate('click')

        onSidebarOpen.should.have.been.calledOnce
    })

    it('should handle Menu category click', () => {
        const secondCategory = wrapper.find('div[id="Category2"]')

        secondCategory.simulate('click', { target: { id: secondCategory.props().id } })

        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom justify-content-between'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
                </div>

                <div className='small text-uppercase font-weight-bold text-center alert alert-primary' role='alert'>
                    <div>Only the following items are available</div>
                    <div>{`Food > Celebration Cakes > All cakes`}</div>
                </div>

                <div>
                    <div
                        onClick={wrapper.instance().handleBackClick}
                        className='font-weight-bold m-2 d-flex align-items-center'
                    >
                        <ChevronLeft />
                        <div className='pt-1'>All Categories</div>
                    </div>
                    <div className='bg-dark text-center text-white p-2'>
                        Category2
                    </div>
                </div>

                <div>
                    <div className='bg-secondary text-white p-2 text-center'>
                        Title2
                    </div>
                    <Link to='/category/some-category' className='border-bottom text-secondary m-2 d-block'>
                        Some Category
                    </Link>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle Menu back button click', () => {
        const category = wrapper.find('div[id="Category1"]')

        category.simulate('click', { target: { id: category.props().id } })

        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom justify-content-between'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
                </div>

                <div className='small text-uppercase font-weight-bold text-center alert alert-primary' role='alert'>
                    <div>Only the following items are available</div>
                    <div>{`Food > Celebration Cakes > All cakes`}</div>
                </div>

                <div>
                    <div
                        onClick={wrapper.instance().handleBackClick}
                        className='font-weight-bold m-2 d-flex align-items-center'
                    >
                        <ChevronLeft />
                        <div className='pt-1'>All Categories</div>
                    </div>
                    <div className='bg-dark text-center text-white p-2'>
                        Category1
                    </div>
                </div>

                <div>
                    <div className='bg-secondary text-white p-2 text-center'>
                        Title1
                    </div>
                    <Link to='/category/category1-1' className='border-bottom text-secondary m-2 d-block'>
                        Category1-1
                    </Link>
                </div>
            </div>
        )).to.equal(true)

        const backButton = wrapper.find('div[className="font-weight-bold m-2 d-flex align-items-center"]')

        backButton.simulate('click')

        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom justify-content-between'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
                </div>

                <div className='small text-uppercase font-weight-bold text-center alert alert-primary' role='alert'>
                    <div>Only the following items are available</div>
                    <div>{`Food > Celebration Cakes > All cakes`}</div>
                </div>

                <div
                    id={'Category1'}
                    onClick={wrapper.instance().handleMenuClick}
                    className='border-bottom text-secondary m-2'
                >
                    Category1
                </div>
                <div
                    id={'Category2'}
                    onClick={wrapper.instance().handleMenuClick}
                    className='border-bottom text-secondary m-2'
                >
                    Category2
                </div>
            </div>
        )).to.equal(true)
    })
})