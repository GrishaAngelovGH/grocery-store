import HelpButton from './HelpButton'

describe('(Component) HelpButton', () => {
    it('should render component', () => {
        const wrapper = shallow(<HelpButton icon={'icon'} label={'label'} />)

        expect(wrapper.equals(
            <button type='button' className='btn btn-secondary'>
                <img src={'icon'} width={100} height={100} />
                <div>label</div>
            </button>
        )).to.equal(true)
    })
})