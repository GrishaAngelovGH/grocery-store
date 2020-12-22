import Logo from 'components/Pages/HomePage/Logo'
import { Delete, ChevronLeft } from 'components/Icons'

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
                        'Category2-1'
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
                <div className='d-flex border-bottom'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
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
                <div className='d-flex border-bottom'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
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
                    <div className='border-bottom text-secondary m-2'>
                        Category2-1
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle Menu back button click', () => {
        const category = wrapper.find('div[id="Category1"]')

        category.simulate('click', { target: { id: category.props().id } })

        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
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
                    <div className='border-bottom text-secondary m-2'>
                        Category1-1
                        </div>
                </div>
            </div>
        )).to.equal(true)

        const backButton = wrapper.find('div[className="font-weight-bold m-2 d-flex align-items-center"]')

        backButton.simulate('click')

        expect(wrapper.equals(
            <div>
                <div className='d-flex border-bottom'>
                    <Logo />
                    <Delete onClick={onSidebarOpen} />
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