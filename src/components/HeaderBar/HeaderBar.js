import PropTypes from 'prop-types'
import { ChevronLeft, ChevronRight } from 'components/Icons'

import MessageCarousel from './MessageCarousel'
import LanguageSelect from './LanguageSelect'
import './HeaderBar.scss'

import translate from 'translate'

export const HeaderBar = ({ strings }) => {
    return (
        <div className='row no-gutters header-bar p-2'>
            <div className='col-md-12'>
                <div className='row no-gutters justify-content-center'>
                    <div className='col-8 col-md-6 col-lg-4 d-flex justify-content-between align-items-center text-center'>
                        <MessageCarousel
                            leftIcon={<ChevronLeft />}
                            rightIcon={<ChevronRight />}
                            messages={strings.messages}
                        />
                    </div>
                </div>

                <div className='row no-gutters justify-content-center'>
                    <div className='col-lg-2 d-flex justify-content-around align-items-center'>
                        <span className='font-weight-bold small' role='button'>{strings.help}</span>
                        <span className='font-weight-bold small' role='button'>{strings.findStore}</span>
                        <LanguageSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderBar.propTypes = {
    strings: PropTypes.object.isRequired
}

HeaderBar.defaultProps = {
    strings: {
        messages: [
            'Beat the queues - Sparks Book & Shop',
            'Get 50% discount',
            'View latest products'
        ],
        help: 'Help',
        findStore: 'Find a store'
    }
}

export default translate('HeaderBar')(HeaderBar)