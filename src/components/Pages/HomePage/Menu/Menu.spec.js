import Menu from './Menu'

describe('(Component) Menu', () => {
    it('should render Menu', () => {
        const wrapper = shallow(
            <Menu
                categories={
                    [
                        { title: 'Title1', subCategories: ['Category1'] },
                        { title: 'Title2', subCategories: ['Category2'] }
                    ]
                }
            />
        )

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
                        <div className='col-md-6 d-flex justify-content-between border bg-white'></div>
                    </div>
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
                categories={
                    [
                        { title: 'Title1', subCategories: ['Category1'] },
                        { title: 'Title2', subCategories: ['Category2'] }
                    ]
                }
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
        const wrapper = shallow(
            <Menu
                categories={
                    [
                        { title: 'Title1', subCategories: ['Category1'] },
                        { title: 'Title2', subCategories: ['Category2'] }
                    ]
                }
            />
        )

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
                        <div className='col-md-6 d-flex justify-content-between border bg-white'>
                            <div>Category2</div>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})