import { Component } from 'react'
import PropTypes from 'prop-types'

import { Reply } from 'components/Icons'
import './Comment.scss'

import translate from 'translate'

export class Comment extends Component {
    handleReply = () => {
        const { id, user, onReply } = this.props

        onReply(id, user)
    }

    render() {
        const { strings, user, image, votes, value, replies, posted, onReply } = this.props

        return (
            <div className='row mt-3 ml-5 mr-0 justify-content-end comment-container'>
                <div className='d-none d-md-block col-md-1 ml-5 p-3 bg-white rounded'>
                    <div className='btn-group-vertical'>
                        <button className='btn border border-secondary' disabled={true}>+</button>
                        <button className='btn border border-secondary' disabled={true}>{votes}</button>
                        <button className='btn border border-secondary' disabled={true}>-</button>
                    </div>
                </div>

                <div className='col-md-8 p-3 bg-white rounded text-muted'>
                    <img src={image} width={50} height={50} className='rounded-circle' />
                    <span className='font-weight-bold small mx-2'>{user}</span>
                    <span className='small mx-2'>{posted}</span>
                    <div className='mt-2 comment-body'>{value}</div>
                </div>

                <div className='col-md-2 p-3 bg-white rounded'>
                    <button
                        className='btn btn-light'
                        disabled={user === strings.defaultAuthor}
                        onClick={this.handleReply}
                    >
                        <div className='d-flex justify-content-center reply-btn'>
                            <Reply />
                            <span>{strings.reply}</span>
                        </div>
                    </button>
                </div>

                {
                    replies.map(v => (
                        <Comment
                            strings={strings}
                            key={v.id}
                            id={v.id}
                            user={v.user}
                            votes={v.votes}
                            value={v.value}
                            replies={v.replies}
                            image={v.image}
                            posted={v.posted}
                            onReply={onReply}
                        />
                    ))
                }
            </div>
        )
    }
}

Comment.propTypes = {
    strings: PropTypes.object.isRequired
}

Comment.defaultProps = {
    strings: {
        reply: 'Reply',
        defaultAuthor: 'You'
    }
}

export default translate('Pages.Comments.Comment')(Comment)