import { Link } from 'react-router-dom'

import './OrderHistory.scss'

const OrderHistory = ({ orders }) => (
    <div className='row no-gutters'>
        <div className='col-12'>
            <div className='row no-gutters bg-info justify-content-between align-items-center'>
                <div className='col-8 col-md-4'>
                    <h1 className='m-0 text-white p-1'>Order History</h1>
                </div>
                <div className='col-2 col-md-1 text-right mr-2'>
                    <Link to='/' className='btn btn-light bi bi-arrow-left' />
                </div>
            </div>

            <div className='row no-gutters order-history overflow-auto'>
                <div className='col-6 col-md-3 col-lg-2 border-right border-info'>
                    {
                        orders.map(v => (
                            <p
                                key={v.id}
                                role='button'
                                className='m-2 p-1 bg-info text-white text-center rounded font-weight-bold'
                            >
                                {v.id}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)

export default OrderHistory