import FeatureMenu from './FeatureMenu'

describe('(Component) FeatureMenu', () => {
    it('should render component', () => {
        const items = [
            {
                image: 'winesBanner',
                title: 'Get delicious wines',
                description: 'Place your order now to get delicious wines delivered to your door',
                link: 'Shop rosé prosecco'
            }
        ]
        const buttonLabel = 'More In Food'

        const wrapper = shallow(<FeatureMenu items={items} buttonLabel={buttonLabel} />)

        expect(wrapper.equals(
            <div className='d-flex flex-column'>
                <div className='d-flex'>
                    <div className='m-2'>
                        <img src={items[0].image} width={200} heigth={200} />
                        <div className='small font-weight-bold'>{items[0].title}</div>
                        <div className='small text-secondary'>{items[0].description}</div>
                        <div className='small text-secondary feature-link'>{items[0].link}</div>
                    </div>
                </div>
                <button type='button' className='btn btn-outline-dark m-2'>{buttonLabel}</button>
            </div>
        )).to.equal(true)
    })
})