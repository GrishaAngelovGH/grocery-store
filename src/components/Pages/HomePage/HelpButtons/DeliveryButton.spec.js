import HelpButton from './HelpButton'
import { delivery } from 'images'

import { DeliveryHelpButton } from './DeliveryButton'

describe('(Component) DeliveryButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<DeliveryHelpButton />)

        expect(wrapper.equals(
            <HelpButton icon={delivery} label={'Free home delivery when you spend over £50'} />
        )).to.equal(true)
    })
})