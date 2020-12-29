import { Link } from 'react-router-dom'

const Logo = () => (
    <Link to='/' className='d-flex text-center text-decoration-none text-dark'>
        <div className='m-3'>
            <h1 className='m-0'>G&S</h1>
            <div className='text-uppercase small'>est. 1883</div>
        </div>
    </Link>
)

export default Logo