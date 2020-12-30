import { Field } from 'react-final-form'

import RequiredInputField, { required } from './RequiredInputField'

describe('(Component) RequiredInputField', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <RequiredInputField
                name={'name-1'}
                label={'label-1'}
            />
        )
    })

    it('should render component', () => {
        expect(wrapper.equals(
            <Field
                name={'name-1'}
                validate={required}
            >
                {
                    wrapper.instance().fieldContent
                }
            </Field>
        )).to.equals(true)
    })

    it('should render field content', () => {
        const input = { value: 'value-1' }

        expect(
            wrapper.instance().fieldContent({ input, meta: {} })
        ).to.eql(
            <div>
                <label>label-1</label>

                {
                    undefined
                }

                <input value='value-1' type='text' className='w-100' />
            </div>
        )
    })

    it('should render field content with error', () => {
        const input = { value: 'value-1' }

        expect(
            wrapper.instance().fieldContent({ input, meta: { error: 'Required', touched: true } })
        ).to.eql(
            <div>
                <label>label-1</label>

                <label className='m-1 p-1 alert-danger'>Required</label>

                <input value='value-1' type='text' className='w-100' />
            </div>
        )
    })
})