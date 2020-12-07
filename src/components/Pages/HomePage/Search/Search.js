import { Search as SearchIcon } from 'components/Icons'

const Search = () => (
    <div className='input-group mb-3'>
        <input
            type='text'
            className='form-control'
            placeholder='Search'
        />
        <div class="input-group-append">
            <span class="input-group-text bg-white">
                <SearchIcon />
            </span>
        </div>
    </div>
)

export default Search