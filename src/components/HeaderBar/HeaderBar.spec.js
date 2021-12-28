import { ChevronLeft, ChevronRight } from 'components/Icons'

import MessageCarousel from './MessageCarousel'
import LanguageSelect from './LanguageSelect'

import { HeaderBar } from './HeaderBar'

describe('(Component) HeaderBar', () => {
    it('should render component', () => {
        const wrapper = shallow(<HeaderBar />)

        expect(wrapper.equals(
            <div className='row no-gutters header-bar p-2'>
                <div className='col-md-12'>
                    <div className='row no-gutters justify-content-center'>
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

                    <div className='row no-gutters justify-content-center'>
                        <div className='col-lg-2 d-flex justify-content-around align-items-center'>
                            <span className='font-weight-bold small' role='button'>Help</span>
                            <span className='font-weight-bold small' role='button'>Find a store</span>
                            <LanguageSelect />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})