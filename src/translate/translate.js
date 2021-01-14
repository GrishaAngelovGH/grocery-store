import { connect } from 'react-redux'
import languages from './languages'

const TranslateWrapper = ({ language, path, src: Component }) => {
    const strings = languages[language][path]
    return (
        <Component strings={strings} />
    )
}

const Translate = connect(
    (state) => ({ language: state.language }),
    ({})
)(TranslateWrapper)

const translate = (path) =>
    (Component) =>
        () => <Translate src={Component} path={path} />

export default translate