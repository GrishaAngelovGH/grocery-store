import { connect } from 'react-redux'
import languages from './languages'

const TranslateWrapper = props => {
    const { language, path, src: Component, ...restProps } = props

    const strings = languages[language][path]

    return (
        <Component strings={strings} {...restProps} />
    )
}

const Translate = connect(
    (state) => ({ language: state.language }),
    ({})
)(TranslateWrapper)

const translate = path =>
    Component =>
        props => (<Translate src={Component} path={path} {...props} />)

export default translate