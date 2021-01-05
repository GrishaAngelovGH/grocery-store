import HelpButton from './HelpButton'
import { nextDayDeliver } from 'images'

import NextDayDeliveryButton from './NextDayDeliveryButton'

describe('(Component) NextDayDeliveryButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<NextDayDeliveryButton />)

        expect(wrapper.equals(
            <HelpButton icon={nextDayDeliver} label={'Order clothing & home by 8pm for next-day delivery (£4.99)'} />
        )).to.equal(true)
    })
})