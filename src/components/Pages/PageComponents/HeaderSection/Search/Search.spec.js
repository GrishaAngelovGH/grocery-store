import { Search as SearchIcon } from 'components/Icons'
import { Search } from './Search'

describe('(Component) Search', () => {
    it('should render component', () => {
        const searchItemByCriteria = sinon.spy()

        const wrapper = shallow(
            <Search
                disabled={false}
                selectedCategory={'all-cakes'}
                searchItemByCriteria={searchItemByCriteria}
            />
        )

        expect(wrapper.equals(
            <div className='input-group'>
                <input
                    disabled={false}
                    type='text'
                    className='form-control'
                    placeholder='Search'
                    onChange={wrapper.instance().handleInputChange}
                />
                <div className='input-group-append'>
                    <span className='input-group-text bg-white'>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should perform searchItemByCriteria with criteria', () => {
        const searchItemByCriteria = sinon.spy()

        const wrapper = shallow(
            <Search
                disabled={false}
                selectedCategory={'all-cakes'}
                searchItemByCriteria={searchItemByCriteria}
            />
        )

        const input = wrapper.find('input')

        input.simulate('change', { target: { value: 'vanilla-cake' } })

        searchItemByCriteria.should.have.been.calledOnce
        searchItemByCriteria.should.have.been.calledWith('vanilla-cake')
    })
})