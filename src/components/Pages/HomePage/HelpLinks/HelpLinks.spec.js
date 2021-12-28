import { shallow } from 'enzyme'
import { HelpLinks } from './HelpLinks'

describe('(Component) HelpLinks', () => {
    it('should render component', () => {
        const wrapper = shallow(<HelpLinks />)

        expect(wrapper.equals(
            <div className='row no-gutters justify-content-center border d-none d-md-flex mt-2'>
                <div role='button' className='col-4 col-md-3 small'>
                    Free home delivery when you spend over £50
                </div>
                <div role='button' className='col-4 col-md-3 small'>
                    Order by 8pm for next-day delivery for £4.99
                </div>
                <div role='button' className='col-4 col-md-3 small'>
                    Shop with confidence with our extended returns policy
                </div>
            </div>
        )).to.equal(true)
    })
})