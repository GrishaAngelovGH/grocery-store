import { connect } from 'react-redux'
import { changeLanguage } from 'actions/language'

import LanguageSelect from './LanguageSelect'

const mapStateToProps = (state) => ({
    language: state.language
})

const mapDispatchToProps = ({
    changeLanguage
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect)