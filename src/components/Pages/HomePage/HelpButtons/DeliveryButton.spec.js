import HelpButton from './HelpButton'
import { delivery } from 'images'

import DeliveryButton from './DeliveryButton'

describe('(Component) DeliveryButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<DeliveryButton />)

        expect(wrapper.equals(
            <HelpButton icon={delivery} label={'FREE HOME DELIVERY when you spend over £50'} />
        )).to.equal(true)
    })
})