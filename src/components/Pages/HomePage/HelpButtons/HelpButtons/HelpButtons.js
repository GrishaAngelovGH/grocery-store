import DeliveryButton from '../DeliveryButton'
import NextDayDeliveryButton from '../NextDayDeliveryButton'
import ReturnDeliveryButton from '../ReturnDeliveryButton'

const HelpButtons = () => {
    return (
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
    )
}

export default HelpButtons