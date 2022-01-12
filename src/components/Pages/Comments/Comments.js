import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ArrowLeftSquare } from 'components/Icons'
import './Comments.scss'

import Comment from './Comment'
import ReplyPanel from './ReplyPanel'

import translate from 'translate'

export class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPanel: false,
            id: '',
            userToReply: '',
        }

        this.commentsRef = React.createRef()
    }

    componentDidMount() {
        const { fetchCommentsById, productId, categoryId } = this.props

        fetchCommentsById(categoryId, productId)
    }

    handleReply = (id, userToReply) => {
        this.setState(
            {
                id,
                userToReply,
                showPanel: true
            },
            () => {
                if (this.commentsRef && this.commentsRef.current) {
                    this.commentsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
            }
        )
    }

    render() {
        const { id, showPanel, userToReply } = this.state
        const { strings, comments, productId, categoryId, createNewComment, fetchCommentsById } = this.props

        return (
            <div className='vh-100 comments'>
                <div className='row no-gutters justify-content-center p-5'>
                    <div className='col-md-12'>

                        <div className='row justify-content-end text-center'>
                            <div className='col-md-4'>
                                <h2>{strings.title}</h2>
                            </div>
                            <div className='col-md-4'>
                                <Link to={`/category/${categoryId}`}>
                                    <ArrowLeftSquare />
                                </Link>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-md-12 col-lg-8'>
                                {
                                    comments[categoryId]
                                    && comments[categoryId][productId]
                                    && comments[categoryId][productId].map(v => (
                                        <Comment
                                            key={v.id}
                                            id={v.id}
                                            user={v.user}
                                            votes={v.votes}
                                            value={v.value}
                                            replies={v.replies}
                                            image={v.image}
                                            posted={v.posted}
                                            onReply={this.handleReply}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        {
                            showPanel && (
                                <ReplyPanel
                                    ref={this.commentsRef}
                                    id={id}
                                    productId={productId}
                                    categoryId={categoryId}
                                    userToReply={userToReply}
                                    createNewComment={createNewComment}
                                    fetchCommentsById={fetchCommentsById}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Comments.propTypes = {
    strings: PropTypes.object.isRequired
}

Comments.defaultProps = {
    strings: {
        title: 'Comments'
    }
}

export default translate('Pages.Comments')(Comments)