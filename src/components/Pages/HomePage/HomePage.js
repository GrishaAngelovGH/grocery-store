import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'
import { User, ShoppingBag } from 'components/Icons'

const menuCategories = [
    { title: 'Title1', subCategories: ['Category1', 'Category2', 'Category3'] },
    { title: 'Title2', subCategories: ['Category4', 'Category5', 'Category6'] }
]

const HomePage = () => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
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
                    <Menu mobile categories={menuCategories} />
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
        </div>
    </div>
)

export default HomePage