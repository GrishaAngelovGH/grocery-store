import { Field, FormSpy } from 'react-final-form'

import StepTitle from 'components/Pages/Checkout/CheckoutSteps/StepTitle'

import { Shipping } from './Shipping'

describe('(Component) Shipping', () => {
    let wrapper, changeShippingMethod

    beforeEach(() => {
        changeShippingMethod = sinon.spy()

        wrapper = shallow(
            <Shipping
                lang={'en'}
                changeShippingMethod={changeShippingMethod}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <div className='row m-1' >
                <div className='col-md-12'>
                    <StepTitle>
                        Shipping
                    </StepTitle>
                    <div className='row'>
                        <div className='col-md-12 col-lg-7'>
                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_fcpi'
                                />{' '}
                                <span className='font-weight-bold'>USPS First Class Package International - £13.35</span>
                                <div className='small text-secondary ml-3'>7 to 21 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmi'
                                />{' '}
                                <span className='font-weight-bold'>USPS Priority Mail International - £44.85</span>
                                <div className='small text-secondary ml-3'>6 to 10 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmei'
                                />{' '}
                                <span className='font-weight-bold'>USPS Priority Mail Express International - £58.99</span>
                                <div className='small text-secondary ml-3'>3 to 5 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='dhl_ew'
                                />{' '}
                                <span className='font-weight-bold'>DHL Express Worldwide - £83.73</span>
                                <div className='small text-secondary ml-3'>2 to 3 business days</div>
                            </label>
                        </div>
                    </div>
                </div>
                <FormSpy
                    subscription={{ values: true }}
                    onChange={wrapper.instance().handleShippingMethodChange}
                />
            </div>
        )).to.equal(true)
    })

    it('should handle shipping method change', () => {
        const formSpy = wrapper.find(FormSpy)

        formSpy.simulate('change', { values: { shipping_method: 'usps_pmi' } })

        changeShippingMethod.should.have.been.calledOnce
        changeShippingMethod.should.have.been.calledWith('USPS Priority Mail International', 44.85)
    })
})