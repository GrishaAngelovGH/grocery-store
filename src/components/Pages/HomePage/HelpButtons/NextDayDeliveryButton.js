import PropTypes from 'prop-types'
import HelpButton from './HelpButton'
import { nextDayDeliver } from 'images'

import translate from 'translate'

export const NextDayDeliveryButton = ({ strings }) => (
    <HelpButton icon={nextDayDeliver} label={strings.label} />
)

NextDayDeliveryButton.propTypes = {
    strings: PropTypes.object.isRequired
}

NextDayDeliveryButton.defaultProps = {
    strings: {
        label: 'Order clothing & home by 8pm for next-day delivery (£4.99)'
    }
}

export default translate('Pages.HomePage.HelpButtons.NextDayDeliveryButton')(NextDayDeliveryButton)