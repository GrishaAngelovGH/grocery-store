import { socialNetworkIcons } from 'images'
import './Footer.scss'

const Footer = () => (
    <div className='row footer-panel p-5 no-gutters justify-content-center'>
        <div className='col-md-6 p-3 border-bottom'>
            <img src={socialNetworkIcons.facebookIcon} />
            <img src={socialNetworkIcons.instagramIcon} />
            <img src={socialNetworkIcons.pinterestIcon} />
            <img src={socialNetworkIcons.twitterIcon} />
            <img src={socialNetworkIcons.youtubeIcon} />
        </div>
        <div className='col-7 col-md-3 col-lg-2 p-3 border-bottom d-flex justify-content-end'>
            <img src={socialNetworkIcons.appStoreLogo} />
        </div>
        <div className='col-7 col-md-3 col-lg-2 p-3 border-bottom d-flex justify-content-end'>
            <img src={socialNetworkIcons.googlePlayStoreLogo} />
        </div>
    </div>
)

export default Footer