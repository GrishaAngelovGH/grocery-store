import { Component } from 'react'
import { bgFlag, ukFlag } from 'images'

class LanguageSelect extends Component {
    handleLanguageSelect = ({ target }) => {
        this.props.changeLanguage(target.id)
    }

    render() {
        const { language } = this.props

        const flags = {
            en: <img role='button' id='bg' src={ukFlag} width={50} height={25} onClick={this.handleLanguageSelect} />,
            bg: <img role='button' id='en' src={bgFlag} width={50} height={25} onClick={this.handleLanguageSelect} />
        }

        return flags[language]
    }
}

export default LanguageSelect