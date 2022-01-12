import React, { Component } from 'react'
import PropTypes from 'prop-types'

import translate from 'translate'

export class ReplyPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPanel: false,
            id: '',
            categoryId: '',
            productId: '',
            message: ''
        }
    }

    handleInputChange = ({ target }) => {
        this.setState({ message: target.value })
    }

    handleSend = () => {
        const { message } = this.state
        const { strings, id, categoryId, productId, createNewComment, fetchCommentsById } = this.props

        createNewComment(message, id, categoryId, productId, strings.defaultAuthor)

        this.setState({ message: '' })

        fetchCommentsById(categoryId, productId)
    }

    render() {
        const { message } = this.state
        const { strings, innerRef, userToReply } = this.props

        return (
            <div ref={innerRef} className='row mt-3 p-5 justify-content-center align-items-center bg-white rounded'>
                <div className='col-lg-1'>
                    <img src={'https://randomuser.me/api/portraits/men/18.jpg'} width={50} height={50} className='rounded-circle' />
                </div>

                <div className='col-lg-4'>
                    <div className='input-group'>
                        <input
                            value={message}
                            type='text'
                            className='form-control'
                            placeholder={strings.placeholder}
                            onChange={this.handleInputChange}
                        />
                        <div className='input-group-append'>
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                disabled={!message}
                                onClick={this.handleSend}
                            >
                                {strings.send}
                            </button>
                        </div>
                    </div>
                </div>

                <span className='badge badge-primary'>
                    {strings.replyTo}: {userToReply}
                </span>
            </div>
        )
    }
}

ReplyPanel.propTypes = {
    strings: PropTypes.object.isRequired
}

ReplyPanel.defaultProps = {
    strings: {
        placeholder: 'Add a comment...',
        send: 'Send',
        replyTo: 'Reply to',
        defaultAuthor: 'You'
    }
}

const ReplyPanelForwardingRef = React.forwardRef((props, ref) => {
    const ReplyPanelWrapper = translate('Pages.Comments.ReplyPanel')(ReplyPanel)

    return (
        <ReplyPanelWrapper {...props} innerRef={ref} />
    )
})

export default ReplyPanelForwardingRef