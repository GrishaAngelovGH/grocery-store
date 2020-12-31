import Steps from 'rc-steps'
import { Form } from 'react-final-form'

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

                <Form
                    onSubmit={wrapper.instance().handleFormSubmit}
                    initialValues={{ shipping_method: 'usps_fcpi' }}
                    render={wrapper.instance().formContent}
                />
            </div>
        )).to.equal(true)
    })

    it('should render form content', () => {
        const handleSubmit = sinon.spy()

        expect(
            wrapper.instance().formContent({ handleSubmit })
        ).to.eql(
            <form onSubmit={handleSubmit}>
                <Step
                    position={0}
                    onChange={wrapper.instance().handleStepChange}
                    disabled={true}
                >
                    <div>content-1</div>
                </Step>
            </form >
        )
    })

    it('should handle step change', () => {
        const handleSubmit = sinon.spy()

        const formContent = wrapper.instance().formContent({ handleSubmit })

        formContent.props.children.props.onChange(1)

        expect(
            wrapper.instance().formContent({ handleSubmit })
        ).to.eql(
            <form onSubmit={handleSubmit}>
                <Step
                    position={1}
                    onChange={wrapper.instance().handleStepChange}
                    disabled={true}
                >
                    <div>content-2</div>
                </Step>
            </form>
        )
    })
})