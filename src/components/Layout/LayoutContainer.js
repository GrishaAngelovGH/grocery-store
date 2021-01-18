import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = (state) => ({
    language: state.language
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)