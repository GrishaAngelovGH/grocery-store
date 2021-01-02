import { Fragment } from 'react'
import ReactSwipe from 'react-swipe'

import MessageCarousel from './MessageCarousel'

describe('(Component) MessageCarousel', () => {
    it('should render component', () => {
        const leftIcon = <span>leftIcon</span>
        const rightIcon = <span>rightIcon</span>
        const messages = ['message1', 'message2']

        const wrapper = shallow(
            <MessageCarousel
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                messages={messages}
            />
        )

        expect(wrapper.equals(
            <Fragment>
                <div role='button' onClick={wrapper.instance().handlePreviousClick}>
                    <span>leftIcon</span>
                </div>

                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: true, auto: 5000 }}
                >
                    <span role='button' className='font-weight-bold'>
                        message1
                    </span>
                    <span role='button' className='font-weight-bold'>
                        message2
                    </span>
                </ReactSwipe>

                <div role='button' onClick={wrapper.instance().handleNextClick}>
                    <span>rightIcon</span>
                </div>
            </Fragment >
        )).to.equal(true)
    })
})
