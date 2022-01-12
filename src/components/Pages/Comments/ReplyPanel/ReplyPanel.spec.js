import { ReplyPanel } from './ReplyPanel'

describe('(Component) ReplyPanel', () => {
    let wrapper, createNewComment, fetchCommentsById

    beforeEach(() => {
        createNewComment = sinon.spy()
        fetchCommentsById = sinon.spy()

        wrapper = shallow(
            <ReplyPanel
                id={1}
                categoryId={'category-1'}
                productId={2}
                userToReply={'John'}
                createNewComment={createNewComment}
                fetchCommentsById={fetchCommentsById}
            />
        )
    })

    it('should render ReplyPanel', () => {
        expect(wrapper.equals(
            <div className='row mt-3 p-5 justify-content-center align-items-center bg-white rounded'>
                <div className='col-lg-1'>
                    <img src={'https://randomuser.me/api/portraits/men/18.jpg'} width={50} height={50} className='rounded-circle' />
                </div>

                <div className='col-lg-4'>
                    <div className='input-group'>
                        <input
                            value={''}
                            onChange={wrapper.instance().handleInputChange}
                            type='text'
                            className='form-control'
                            placeholder='Add a comment...'
                        />
                        <div className='input-group-append'>
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                disabled={true}
                                onClick={wrapper.instance().handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <span className='badge badge-primary'>Reply to: John</span>
            </div>
        )).to.equal(true)
    })

    it('should handle input change', () => {
        wrapper.find('input').simulate('change', { target: { value: 'message123' } })

        expect(wrapper.equals(
            <div className='row mt-3 p-5 justify-content-center align-items-center bg-white rounded'>
                <div className='col-lg-1'>
                    <img src={'https://randomuser.me/api/portraits/men/18.jpg'} width={50} height={50} className='rounded-circle' />
                </div>

                <div className='col-lg-4'>
                    <div className='input-group'>
                        <input
                            value={'message123'}
                            onChange={wrapper.instance().handleInputChange}
                            type='text'
                            className='form-control'
                            placeholder='Add a comment...'
                        />
                        <div className='input-group-append'>
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                disabled={false}
                                onClick={wrapper.instance().handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <span className='badge badge-primary'>Reply to: John</span>
            </div>
        )).to.equal(true)
    })

    it('should handle send message', () => {
        wrapper.find('input').simulate('change', { target: { value: 'message123' } })
        wrapper.find('button').simulate('click')

        createNewComment.should.have.been.calledOnce
        createNewComment.should.have.been.calledWith('message123', 1, 'category-1', 2, 'You')

        fetchCommentsById.should.have.been.calledOnce
        fetchCommentsById.should.have.been.calledWith('category-1', 2)

        expect(wrapper.equals(
            <div className='row mt-3 p-5 justify-content-center align-items-center bg-white rounded'>
                <div className='col-lg-1'>
                    <img src={'https://randomuser.me/api/portraits/men/18.jpg'} width={50} height={50} className='rounded-circle' />
                </div>

                <div className='col-lg-4'>
                    <div className='input-group'>
                        <input
                            value={''}
                            onChange={wrapper.instance().handleInputChange}
                            type='text'
                            className='form-control'
                            placeholder='Add a comment...'
                        />
                        <div className='input-group-append'>
                            <button
                                type='button'
                                className='btn btn-outline-primary'
                                disabled={true}
                                onClick={wrapper.instance().handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <span className='badge badge-primary'>Reply to: John</span>
            </div>
        )).to.equal(true)
    })
})