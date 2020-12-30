import Steps from 'rc-steps'
import Step from './Step'

import CheckoutSteps from './CheckoutSteps'

describe('(Component) CheckoutSteps', () => {
    let wrapper

    const steps = [
        { title: 'Title-1', component: (<div>content-1</div>) },
        { title: 'Title-2', component: (<div>content-2</div>) }
    ]

    beforeEach(() => {
        wrapper = shallow(<CheckoutSteps steps={steps} />)
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='m-5'>
                <Steps current={0}>
                    <Steps.Step title={'Title-1'} />
                    <Steps.Step title={'Title-2'} />
                </Steps>

                <Step position={0} onChange={wrapper.instance().handleStepChange}>
                    <div>content-1</div>
                </Step>
            </div>
        )).to.equal(true)
    })

    it('should handle step change', () => {
        const step = wrapper.find(Step)

        step.simulate('change', 1)

        expect(wrapper.equals(
            <div className='m-5'>
                <Steps current={1}>
                    <Steps.Step title={'Title-1'} />
                    <Steps.Step title={'Title-2'} />
                </Steps>

                <Step position={1} onChange={wrapper.instance().handleStepChange}>
                    <div>content-2</div>
                </Step>
            </div>
        )).to.equal(true)
    })
})