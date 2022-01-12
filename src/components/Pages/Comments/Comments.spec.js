import { Link } from 'react-router-dom'

import { Comments } from './Comments'
import Comment from './Comment'
import ReplyPanel from './ReplyPanel'

import { ArrowLeftSquare } from 'components/Icons'

describe('(Component) Comments', () => {
    let wrapper, fetchCommentsById, createNewComment

    const comments = {
        'all-cakes': {
            1: [
                {
                    id: 1,
                    user: 'User 1',
                    image: 'https://randomuser.me/api/portraits/men/11.jpg',
                    posted: '1 month ago',
                    value: 'comment 1',
                    votes: 12,
                    replies: []
                },
                {
                    id: 2,
                    user: 'User 2',
                    image: 'https://randomuser.me/api/portraits/men/12.jpg',
                    posted: '1 month ago',
                    value: 'comment 2',
                    votes: 12,
                    replies: [
                        {
                            id: 3,
                            user: 'User 3',
                            image: 'https://randomuser.me/api/portraits/men/18.jpg',
                            posted: '2 weeks ago',
                            value: 'comment 3',
                            votes: 5,
                            replies: []
                        }
                    ]
                },
            ]
        }
    }

    beforeEach(() => {
        fetchCommentsById = sinon.spy()
        createNewComment = sinon.spy()

        wrapper = shallow(
            <Comments
                productId={1}
                categoryId={'all-cakes'}
                comments={comments}
                fetchCommentsById={fetchCommentsById}
                createNewComment={createNewComment}
            />
        )
    })

    it('should fetch comments on mount', () => {
        fetchCommentsById.should.have.been.calledOnce
        fetchCommentsById.should.have.been.calledWith('all-cakes', 1)
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='vh-100 comments'>
                <div className='row no-gutters justify-content-center p-5'>
                    <div className='col-md-12'>

                        <div className='row justify-content-end text-center'>
                            <div className='col-md-4'>
                                <h2>Comments</h2>
                            </div>
                            <div className='col-md-4'>
                                <Link to='/category/all-cakes'>
                                    <ArrowLeftSquare />
                                </Link>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-md-12 col-lg-8'>
                                <Comment
                                    key={comments['all-cakes'][1][0].id}
                                    id={comments['all-cakes'][1][0].id}
                                    user={comments['all-cakes'][1][0].user}
                                    votes={comments['all-cakes'][1][0].votes}
                                    value={comments['all-cakes'][1][0].value}
                                    replies={comments['all-cakes'][1][0].replies}
                                    image={comments['all-cakes'][1][0].image}
                                    posted={comments['all-cakes'][1][0].posted}
                                    onReply={wrapper.instance().handleReply}
                                />
                                <Comment
                                    key={comments['all-cakes'][1][1].id}
                                    id={comments['all-cakes'][1][1].id}
                                    user={comments['all-cakes'][1][1].user}
                                    votes={comments['all-cakes'][1][1].votes}
                                    value={comments['all-cakes'][1][1].value}
                                    replies={comments['all-cakes'][1][1].replies}
                                    image={comments['all-cakes'][1][1].image}
                                    posted={comments['all-cakes'][1][1].posted}
                                    onReply={wrapper.instance().handleReply}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)

        expect(wrapper.find(ReplyPanel)).to.not.have.length
    })

    it('should show ReplyPanel', () => {
        wrapper = shallow(
            <Comments
                productId={1}
                categoryId={'all-cakes'}
                comments={comments}
                fetchCommentsById={fetchCommentsById}
                createNewComment={createNewComment}
            />
        )

        wrapper.find(Comment).at(1).simulate(
            'reply',
            comments['all-cakes'][1][1].id,
            comments['all-cakes'][1][1].user
        )

        expect(wrapper.find(ReplyPanel)).to.have.length(1)
    })
})