import PropTypes from 'prop-types'
import HelpButton from '../HelpButton'
import { returnsDelivery } from 'images'

import translate from 'translate'

export const ReturnDeliveryButton = ({ strings }) => (
    <HelpButton icon={returnsDelivery} label={strings.label} />
)

ReturnDeliveryButton.propTypes = {
    strings: PropTypes.object.isRequired
}

ReturnDeliveryButton.defaultProps = {
    strings: {
        label: 'Shop with confidence with our extended returns policy'
    }
}

export default translate('Pages.HomePage.HelpButtons.ReturnDeliveryButton')(ReturnDeliveryButton)