import { Link } from 'react-router-dom'

import { EmptyProductCategory } from './EmptyProductCategory'

describe('(Component) EmptyProductCategory', () => {
    it('should render component', () => {
        const wrapper = shallow(<EmptyProductCategory />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center vh-100'>
                <div className='col-md-6'>
                    <div className='jumbotron text-center bg-white'>
                        <h2 className='display-4'>
                            No items were found for this category
                        </h2>

                        <p className='lead'>
                            {'Only available items are in Food > Celebration Cakes > All Cakes'}
                        </p>

                        <Link to='/' className='text-decoration-none'>
                            <button type='button' className='btn btn-outline-success btn-block'>
                                Continue
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})
