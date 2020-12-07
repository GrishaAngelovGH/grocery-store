import Logo from './Logo'
import Search from './Search'
import { User, ShoppingBag } from 'components/Icons'

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
        </div>
    </div>
)

export default HomePage