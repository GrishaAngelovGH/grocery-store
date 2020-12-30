import Step from './Step'

describe('(Component) Step', () => {
    it('should render component', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step position={0} onChange={onChange}>
                <div>content</div>
            </Step>
        )

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center m-3'>
                <div className='col-md-10 border'>
                    <div>content</div>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={wrapper.instance().handleChange}
                    >
                        Next
                    </button>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle step change', () => {
        const onChange = sinon.spy()

        const wrapper = shallow(
            <Step position={0} onChange={onChange}>
                <div>content</div>
            </Step>
        )

        const button = wrapper.find('button')

        button.simulate('click')

        onChange.should.have.been.calledOnce
        onChange.should.have.been.calledWith(1)
    })
})