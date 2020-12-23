import { Search as SearchIcon } from 'components/Icons'

const Search = () => (
    <div className='input-group'>
        <input
            type='text'
            className='form-control'
            placeholder='Search'
        />
        <div className="input-group-append">
            <span className="input-group-text bg-white">
                <SearchIcon />
            </span>
        </div>
    </div>
)

export default Search