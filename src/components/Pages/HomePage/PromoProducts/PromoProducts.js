import PropTypes from 'prop-types'

import {
    winesBanner,
    specialWineBanner,
    flowersBanner
} from 'images'

import PromoProduct from './PromoProduct'
import translate from 'translate'

export const PromoProducts = ({ strings }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <div className='row no-gutters justify-content-center'>
                <h2>{strings.label}</h2>
            </div>

            <div className='row no-gutters justify-content-around'>
                {
                    strings.products([winesBanner, specialWineBanner, flowersBanner]).map(v => (
                        <PromoProduct
                            key={v.description}
                            image={v.image}
                            imageLabel={v.imageLabel}
                            description={v.description}
                            linkTitle={v.linkTitle}
                        />
                    ))
                }
            </div>
        </div>
    </div>
)

PromoProducts.propTypes = {
    strings: PropTypes.object.isRequired
}

PromoProducts.defaultProps = {
    strings: {
        label: 'G&S Food',
        products: images => {
            const items = [
                {
                    imageLabel: 'Special offers',
                    description: 'Save up to 1/3 on selected wines',
                    linkTitle: 'Shop wine by the case'
                },
                {
                    imageLabel: 'Limited offers',
                    description: 'Save up to 20% on selected wines',
                    linkTitle: 'Shop wine by the case'
                },
                {
                    imageLabel: 'Free delivery',
                    description: 'Save £5 on selected bouquets',
                    linkTitle: 'Shop now'
                }
            ]

            return items.map((v, i) => ({ image: images[i], ...v }))
        }
    }
}

export default translate('Pages.HomePage.PromoProducts')(PromoProducts)