import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import ReactSwipe from 'react-swipe';

class MessageCarousel extends Component {
    reactSwipeEl

    handlePreviousClick = () => this.reactSwipeEl.prev()

    handleNextClick = () => this.reactSwipeEl.next()

    render() {
        const { leftIcon, rightIcon, messages } = this.props

        return (
            <Fragment>
                <div role='button' onClick={this.handlePreviousClick}>
                    {leftIcon}
                </div>

                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true, auto: 5000 }}
                    ref={el => (this.reactSwipeEl = el)}
                >
                    {
                        messages.map((v, i) => (
                            <span key={i} role='button' className='font-weight-bold'>
                                {v}
                            </span>
                        ))
                    }
                </ReactSwipe>

                <div role='button' onClick={this.handleNextClick}>
                    {rightIcon}
                </div>
            </Fragment >
        )
    }
}

MessageCarousel.propTypes = {
    leftIcon: PropTypes.element.isRequired,
    rightIcon: PropTypes.element.isRequired,
    messages: PropTypes.array.isRequired
}

export default MessageCarousel