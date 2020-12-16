import PromoDeal from './PromoDeal'

describe('(Component) PromoDeal', () => {
    it('should render component', () => {
        const deal = {
            category: 'category',
            description: 'description',
            linkTitle: 'linkTitle'
        }

        const wrapper = shallow(<PromoDeal deal={deal} />)

        expect(wrapper.equals(
            <div className='promo-deal d-flex flex-column justify-content-center align-items-center text-center'>
                <div className='text-uppercase mb-2'>category</div>
                <div className='text-uppercase font-weight-bold mb-2'>description</div>
                <div className='font-italic'>linkTitle</div>
            </div>
        )).to.equal(true)
    })
})