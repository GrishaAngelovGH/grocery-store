import { Link } from 'react-router-dom'

const OrderHistory = ({ orders }) => (
    <div className='row no-gutters'>
        <div className='col-12'>

            <div className='row no-gutters bg-info align-items-center'>
                <div className='col-10'>
                    <h1 className='m-0 text-white text-center p-1 ml-5'>Order History</h1>
                </div>
                <div className='col-2 text-center'>
                    <Link to='/' className='btn btn-light bi bi-arrow-left' />
                </div>
            </div>

            <div className='font-weight-bold'>Orders: {orders.length}</div>
        </div>
    </div>
)

export default OrderHistory