import { appMarketplace } from 'images'
import Footer from './Footer'

describe('(Component) Footer', () => {
    it('should render component', () => {
        const wrapper = shallow(<Footer />)

        expect(wrapper.equals(
            <div className='row footer-panel p-5 no-gutters justify-content-center text-center'>
                <div className='col-12 col-md-4 col-lg-3 p-3'>
                    <i className="bi bi-facebook mx-1"></i>
                    <i className="bi bi-instagram mx-1"></i>
                    <i className="bi bi-pinterest mx-1"></i>
                    <i className="bi bi-twitter mx-1"></i>
                    <i className="bi bi-youtube mx-1"></i>
                </div>
                <div className='col-6 col-md-3 col-lg-3 p-3'>
                    <img src={appMarketplace.appStoreLogo} />
                </div>
                <div className='col-6 col-md-3 col-lg-3 p-3'>
                    <img src={appMarketplace.googlePlayStoreLogo} />
                </div>
            </div>
        )).to.equal(true)
    })
})
