import { ukFlag } from 'images'
import LanguageSelect from './LanguageSelect'

describe('(Component) LanguageSelect', () => {
    it('should render component', () => {
        const changeLanguage = sinon.spy()

        const wrapper = shallow(
            <LanguageSelect
                language={'en'}
                changeLanguage={changeLanguage}
            />
        )

        expect(wrapper.equals(
            <img
                role='button'
                id='bg'
                src={ukFlag}
                width={50}
                height={25}
                onClick={wrapper.instance().handleLanguageSelect}
            />
        )).to.equal(true)
    })

    it('should handle flag change', () => {
        const changeLanguage = sinon.spy()

        const wrapper = shallow(
            <LanguageSelect
                language={'en'}
                changeLanguage={changeLanguage}
            />
        )

        wrapper.simulate('click', { target: { id: wrapper.props().id } })

        changeLanguage.should.have.been.calledOnce
        changeLanguage.should.have.been.calledWith('bg')
    })
})