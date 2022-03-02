import { Component } from 'react'
import PropTypes from 'prop-types'

import { Search as SearchIcon } from 'components/Icons'
import translate from 'translate'

export class Search extends Component {
    handleInputChange = ({ target }) => {
        this.props.searchItemByCriteria(target.value, this.props.lang)
    }

    render() {
        const { disabled, strings } = this.props

        return (
            <div className='input-group'>
                <input
                    disabled={disabled}
                    type='text'
                    className='form-control'
                    placeholder={strings.placeholder}
                    onChange={this.handleInputChange}
                />
                <div className='input-group-append'>
                    <span className='input-group-text bg-white'>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    strings: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    selectedCategory: PropTypes.string,
    searchItemByCriteria: PropTypes.func.isRequired
}

Search.defaultProps = {
    strings: {
        placeholder: 'Search'
    }
}

export default translate('Pages.PageComponents.HeaderSection.Search')(Search)