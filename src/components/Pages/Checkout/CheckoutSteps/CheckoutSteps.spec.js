import { Navigate } from 'react-router-dom'
import { Form } from 'react-final-form'
import Swal from 'sweetalert2'
import Steps from 'rc-steps'

import Step from './Step'
import { CheckoutSteps } from './CheckoutSteps'

import { createSandbox } from 'sinon'

const sandbox = createSandbox()

describe('(Component) CheckoutSteps', () => {
    let wrapper, clearItemsFromShoppingCart

    const steps = [
        { title: 'Title-1', component: (<div>content-1</div>), showNextButton: true, showPrevButton: false },
        { title: 'Title-2', component: (<div>content-2</div>), showNextButton: false, showPrevButton: true }
    ]

    beforeEach(() => {
        clearItemsFromShoppingCart = sinon.spy()
        sandbox.stub(Swal, 'fire').callsFake(() => Promise.resolve())

        wrapper = shallow(
            <CheckoutSteps
                steps={steps}
                clearItemsFromShoppingCart={clearItemsFromShoppingCart}
            />
        )
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='checkout-steps p-3'>
                <div className='p-2 border rounded shadow'>
                    <Steps current={0}>
                        <Steps.Step title={'Title-1'} />
                        <Steps.Step title={'Title-2'} />
                    </Steps>
                </div>

                <Form
                    onSubmit={wrapper.instance().handleFormSubmit}
                    initialValues={{
                        shipping_method: 'usps_fcpi',
                        payment_method: 'credit_card',
                        credit_card_type: 'visa',
                        country: 'bg'
                    }}
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
                    showNextButton={true}
                    showPrevButton={false}
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
                    showNextButton={false}
                    showPrevButton={true}
                    disabled={true}
                >
                    <div>content-2</div>
                </Step>
            </form>
        )
    })

    it('should clear all cart items after checkout process', async () => {
        wrapper.find(Form).simulate('submit')

        await new Promise((resolve) => setTimeout(resolve, 5))

        expect(wrapper.equals(
            <Navigate replace to={'/'} />
        )).to.equal(true)

        clearItemsFromShoppingCart.should.have.been.calledOnce
    })
})