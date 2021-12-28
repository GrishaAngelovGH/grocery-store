import { connect } from 'react-redux'
import HeaderSection from './HeaderSection'

export default connect(
    state => ({ lang: state.language }),
    ({})
)(HeaderSection)