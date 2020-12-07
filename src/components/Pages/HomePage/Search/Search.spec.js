import { Search as SearchIcon } from 'components/Icons'
import Search from './Search'

describe('(Component) Search', () => {
    it('should render component', () => {
        const wrapper = shallow(<Search />)

        expect(wrapper.equals(
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
        )).to.equal(true)
    })
})