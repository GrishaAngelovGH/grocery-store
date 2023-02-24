import HelpButtons from './HelpButtons'

import DeliveryButton from '../DeliveryButton'
import NextDayDeliveryButton from '../NextDayDeliveryButton'
import ReturnDeliveryButton from '../ReturnDeliveryButton'

describe('(Component) HelpButtons', () => {
    it('should render component', () => {
        const wrapper = shallow(<HelpButtons />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-around text-center m-2'>
                <div className='col-md-3'>
                    <DeliveryButton />
                </div>
                <div className='col-md-3'>
                    <NextDayDeliveryButton />
                </div>
                <div className='col-md-3'>
                    <ReturnDeliveryButton />
                </div>
            </div>
        )).to.equal(true)
    })
})

