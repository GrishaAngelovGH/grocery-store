import { Component } from 'react'
import PropTypes from 'prop-types'

import { Search as SearchIcon } from 'components/Icons'

class Search extends Component {
    handleInputChange = ({ target }) => {
        if (target.value.length > 0) {
            this.props.searchItemByCriteria(target.value)
            return
        }

        this.props.fetchAllItemsByCategory(this.props.selectedCategory)
    }

    render() {
        const { disabled } = this.props

        return (
            <div className='input-group'>
                <input
                    disabled={disabled}
                    type='text'
                    className='form-control'
                    placeholder='Search'
                    onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text bg-white">
                        <SearchIcon />
                    </span>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    disabled: PropTypes.bool,
    selectedCategory: PropTypes.string,
    searchItemByCriteria: PropTypes.func.isRequired,
    fetchAllItemsByCategory: PropTypes.func.isRequired
}

export default Search