import PropTypes from 'prop-types'
import HelpButton from './HelpButton'
import { delivery } from 'images'

import translate from 'translate'

export const DeliveryHelpButton = ({ strings }) => (
    <HelpButton icon={delivery} label={strings.label} />
)

DeliveryHelpButton.propTypes = {
    strings: PropTypes.object.isRequired
}

DeliveryHelpButton.defaultProps = {
    strings: {
        label: 'Free home delivery when you spend over £50'
    }
}

export default translate('Pages.HomePage.HelpButtons.DeliveryButton')(DeliveryHelpButton)