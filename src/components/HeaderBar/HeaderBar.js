import { ChevronLeft, ChevronRight } from 'components/Icons'

import MessageCarousel from './MessageCarousel'
import './HeaderBar.scss'

const HeaderBar = () => {
    return (
        <div className='row no-gutters justify-content-center header-bar'>
            <div className='col-8 col-md-6 col-lg-4 d-flex justify-content-between align-items-center text-center'>
                <MessageCarousel
                    leftIcon={<ChevronLeft />}
                    rightIcon={<ChevronRight />}
                    messages={[
                        'Beat the queues - Sparks Book & Shop',
                        'Get 50% discount',
                        'View latest products'
                    ]}
                />
            </div>
        </div>
    )
}

export default HeaderBar