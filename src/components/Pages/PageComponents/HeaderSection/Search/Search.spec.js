import { Search as SearchIcon } from 'components/Icons'
import Search from './Search'

describe('(Component) Search', () => {
    it('should render component', () => {
        const wrapper = shallow(<Search />)

        expect(wrapper.equals(
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
        )).to.equal(true)
    })
})