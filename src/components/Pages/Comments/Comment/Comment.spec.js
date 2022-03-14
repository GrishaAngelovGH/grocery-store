import { Comment } from './Comment'
import { Reply } from 'components/Icons'

describe('(Component) Comment', () => {
    let onReply

    const comment = {
        id: 1,
        user: 'User 1',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        posted: '1 month ago',
        value: 'comment 1',
        votes: 12,
        replies: [
            {
                id: 2,
                user: 'User 2',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'comment 2',
                votes: 5,
                replies: []
            }
        ]
    }

    beforeEach(() => {
        onReply = sinon.spy()
    })

    it('should render component', () => {
        const wrapper = shallow(
            <Comment
                id={comment.id}
                user={comment.user}
                image={comment.image}
                votes={comment.votes}
                value={comment.value}
                replies={comment.replies}
                posted={comment.posted}
                onReply={onReply}
            />
        )

        expect(wrapper.equals(
            <div className='row mt-3 ml-5 mr-0 justify-content-end comment-container'>
                <div className='d-none d-md-block col-md-1 ml-5 p-3 bg-white rounded'>
                    <div className='btn-group-vertical'>
                        <button className='btn border border-secondary' disabled={true}>+</button>
                        <button className='btn border border-secondary' disabled={true}>{comment.votes}</button>
                        <button className='btn border border-secondary' disabled={true}>-</button>
                    </div>
                </div>

                <div className='col-md-8 p-3 bg-white rounded text-muted'>
                    <img src={comment.image} width={50} height={50} className='rounded-circle' />
                    <span className='font-weight-bold small mx-2'>{comment.user}</span>
                    <span className='small mx-2'>{comment.posted}</span>
                    <div className='mt-2 comment-body'>{comment.value}</div>
                </div>

                <div className='col-md-2 p-3 bg-white rounded'>
                    <button
                        className='btn btn-light'
                        disabled={false}
                        onClick={wrapper.instance().handleReply}
                    >
                        <div className='d-flex justify-content-center reply-btn'>
                            <Reply />
                            <span>Reply</span>
                        </div>
                    </button>
                </div>

                <Comment
                    id={comment.replies[0].id}
                    user={comment.replies[0].user}
                    votes={comment.replies[0].votes}
                    value={comment.replies[0].value}
                    replies={comment.replies[0].replies}
                    image={comment.replies[0].image}
                    posted={comment.replies[0].posted}
                    onReply={onReply}
                />
            </div>
        )).to.equal(true)
    })

    it('should render component with default author', () => {
        const wrapper = shallow(
            <Comment
                id={comment.id}
                user={'You'}
                image={comment.image}
                votes={comment.votes}
                value={comment.value}
                replies={comment.replies}
                posted={comment.posted}
                onReply={onReply}
            />
        )

        expect(wrapper.equals(
            <div className='row mt-3 ml-5 mr-0 justify-content-end comment-container'>
                <div className='d-none d-md-block col-md-1 ml-5 p-3 bg-white rounded'>
                    <div className='btn-group-vertical'>
                        <button className='btn border border-secondary' disabled={true}>+</button>
                        <button className='btn border border-secondary' disabled={true}>{comment.votes}</button>
                        <button className='btn border border-secondary' disabled={true}>-</button>
                    </div>
                </div>

                <div className='col-md-8 p-3 bg-white rounded text-muted'>
                    <img src={comment.image} width={50} height={50} className='rounded-circle' />
                    <span className='font-weight-bold small mx-2'>You</span>
                    <span className='small mx-2'>{comment.posted}</span>
                    <div className='mt-2 comment-body'>{comment.value}</div>
                </div>

                <div className='col-md-2 p-3 bg-white rounded'>
                    <button
                        className='btn btn-light'
                        disabled={true}
                        onClick={wrapper.instance().handleReply}
                    >
                        <div className='d-flex justify-content-center reply-btn'>
                            <Reply />
                            <span>Reply</span>
                        </div>
                    </button>
                </div>

                <Comment
                    id={comment.replies[0].id}
                    user={comment.replies[0].user}
                    votes={comment.replies[0].votes}
                    value={comment.replies[0].value}
                    replies={comment.replies[0].replies}
                    image={comment.replies[0].image}
                    posted={comment.replies[0].posted}
                    onReply={onReply}
                />
            </div>
        )).to.equal(true)
    })

    it('should handle reply to comment', () => {
        const wrapper = shallow(
            <Comment
                id={comment.id}
                user={comment.user}
                image={comment.image}
                votes={comment.votes}
                value={comment.value}
                replies={comment.replies}
                posted={comment.posted}
                onReply={onReply}
            />
        )

        const replyButton = wrapper.find('button[className="btn btn-light"]')

        replyButton.simulate('click')

        onReply.should.have.been.calledOnce
        onReply.should.have.been.calledWith(1, 'User 1')
    })
})