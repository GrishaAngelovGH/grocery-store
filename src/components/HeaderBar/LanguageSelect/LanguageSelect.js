import { Component } from 'react'
import { bgFlag, gbFlag } from 'images'

class LanguageSelect extends Component {
    constructor(props) {
        super(props)

        this.flags = {
            en: <img role='button' id='bg' src={gbFlag} width={50} height={25} onClick={this.handleLanguageSelect} />,
            bg: <img role='button' id='en' src={bgFlag} width={50} height={25} onClick={this.handleLanguageSelect} />
        }
    }

    handleLanguageSelect = ({ target }) => {
        this.props.changeLanguage(target.id)
    }

    render() {
        const { language } = this.props

        return this.flags[language]
    }
}

export default LanguageSelect