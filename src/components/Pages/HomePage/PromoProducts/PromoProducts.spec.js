import PromoProduct from './PromoProduct'
import PromoProducts from './PromoProducts'

describe('(Component) PromoProducts', () => {
    it('should render component', () => {
        const products = [
            {
                image: 'image1',
                imageLabel: 'Special offers',
                description: 'Save up to 1/3 on selected wines',
                linkTitle: 'Shop wine by the case'
            },
            {
                image: 'image2',
                imageLabel: 'Limited offers',
                description: 'Save up to 20% on selected wines',
                linkTitle: 'Shop wine by the case'
            }
        ]

        const wrapper = shallow(<PromoProducts products={products} />)

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <div className='row no-gutters justify-content-center'>
                        <h2>G&S Food</h2>
                    </div>

                    <div className='row no-gutters justify-content-around'>
                        <PromoProduct
                            image={products[0].image}
                            imageLabel={products[0].imageLabel}
                            description={products[0].description}
                            linkTitle={products[0].linkTitle}
                        />

                        <PromoProduct
                            image={products[1].image}
                            imageLabel={products[1].imageLabel}
                            description={products[1].description}
                            linkTitle={products[1].linkTitle}
                        />
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})