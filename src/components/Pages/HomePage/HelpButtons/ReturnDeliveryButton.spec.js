import HelpButton from './HelpButton'
import { returnsDelivery } from 'images'

import { ReturnDeliveryButton } from './ReturnDeliveryButton'

describe('(Component) ReturnDeliveryButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<ReturnDeliveryButton />)

        expect(wrapper.equals(
            <HelpButton icon={returnsDelivery} label={'Shop with confidence with our extended returns policy'} />
        )).to.equal(true)
    })
})