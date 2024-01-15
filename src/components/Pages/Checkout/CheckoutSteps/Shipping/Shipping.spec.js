import { Field } from 'react-final-form'

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
                values={{ shipping_method: 'usps_fcpi' }}
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
                        <div className='col-12'>
                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_fcpi'
                                    onClick={wrapper.instance().handleShippingMethodChange}
                                />
                                <span className='ml-1 font-weight-bold'>USPS First Class Package International - £13.35</span>
                                <div className='small text-secondary ml-3'>7 to 21 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmi'
                                    onClick={wrapper.instance().handleShippingMethodChange}
                                />
                                <span className='ml-1 font-weight-bold'>USPS Priority Mail International - £44.85</span>
                                <div className='small text-secondary ml-3'>6 to 10 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='usps_pmei'
                                    onClick={wrapper.instance().handleShippingMethodChange}
                                />
                                <span className='ml-1 font-weight-bold'>USPS Priority Mail Express International - £58.99</span>
                                <div className='small text-secondary ml-3'>3 to 5 business days</div>
                            </label>

                            <label>
                                <Field
                                    name='shipping_method'
                                    component='input'
                                    type='radio'
                                    value='dhl_ew'
                                    onClick={wrapper.instance().handleShippingMethodChange}
                                />
                                <span className='ml-1 font-weight-bold'>DHL Express Worldwide - £83.73</span>
                                <div className='small text-secondary ml-3'>2 to 3 business days</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should handle shipping method change', () => {
        const field = wrapper.find(Field).at(2)

        field.simulate('click', { target: { value: 'usps_pmi' } })

        changeShippingMethod.should.have.been.calledWith('USPS Priority Mail International', 44.85)
    })
})