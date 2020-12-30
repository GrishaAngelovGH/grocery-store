import { Link } from 'react-router-dom'

const EmptyProductCategory = () => (
    <div className='row no-gutters justify-content-center m-5 m-lg-2'>
        <div className='col-md-6 m-4 m-lg-0'>
            <div className='jumbotron text-center bg-white'>
                <h2 className='display-4'>
                    There are no found items for this category.
                </h2>

                <p className='lead'>
                    {` Only available items are in Food > Celebration Cakes > All Cakes`}
                </p>

                <Link to='/' className='text-decoration-none'>
                    <button type='button' className='btn btn-outline-success btn-block'>
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    </div>
)

export default EmptyProductCategory