import { delivery } from 'images'
import HelpButton from './HelpButton'

describe('(Component) HelpButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<HelpButton icon={delivery} label={'label'} />)

        expect(wrapper.equals(
            <button type='button' className='btn btn-success help-button'>
                <img src={delivery} width={100} height={100} />
                <div>label</div>
            </button>
        )).to.equal(true)
    })
})