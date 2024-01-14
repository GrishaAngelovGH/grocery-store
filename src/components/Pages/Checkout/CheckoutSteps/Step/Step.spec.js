import { Step } from './Step'

describe('(Component) Step', () => {
    it('should render component', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step
                position={1}
                onChange={onChange}
                showPrevButton={true}
                showNextButton={true}
                disabled={false}
            >
                <div>content</div>
            </Step>
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-7 col-lg-5 border rounded p-2 shadow bg-white'>
                    <div>content</div>
                    <div className='d-flex justify-content-end'>
                        <button
                            type='button'
                            className='btn btn-primary w-25 mr-2'
                            onClick={wrapper.instance().handlePrevStepChange}
                            disabled={false}
                        >
                            Prev
                        </button>
                        <button
                            type='button'
                            className='btn btn-primary w-25 mr-2'
                            onClick={wrapper.instance().handleNextStepChange}
                            disabled={false}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render component without buttons', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step
                position={0}
                onChange={onChange}
                showPrevButton={false}
                showNextButton={false}
                disabled={false}
            >
                <div>content</div>
            </Step>
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-7 col-lg-5 border rounded p-2 shadow bg-white'>
                    <div>content</div>
                    <div className='d-flex justify-content-end'></div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle next step change', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step
                position={0}
                onChange={onChange}
                showPrevButton={false}
                showNextButton={true}
                disabled={false}
            >
                <div>content</div>
            </Step>
        )

        const button = wrapper.find('button')

        button.simulate('click')

        onChange.should.have.been.calledOnce
        onChange.should.have.been.calledWith(1)
    })

    it('should handle prev step change', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step
                position={2}
                onChange={onChange}
                showPrevButton={true}
                showNextButton={false}
                disabled={false}
            >
                <div>content</div>
            </Step>
        )

        const button = wrapper.find('button')

        button.simulate('click')

        onChange.should.have.been.calledOnce
        onChange.should.have.been.calledWith(1)
    })
})