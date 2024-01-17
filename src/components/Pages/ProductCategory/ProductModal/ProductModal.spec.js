import ProductModal from './ProductModal'

describe('(Component) ProductModal', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <ProductModal
                image='cookiesAndCreamCake'
                name='Cookies And Cream Cake'
                description='description'
            />
        )

        expect(wrapper.equals(
            <div className='modal fade' data-backdrop='static' id='product-modal-cookies-and-cream-cake' tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Cookies And Cream Cake</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true' className='bi bi-x'></span>
                            </button>
                        </div>
                        <div className='modal-body text-center'>
                            <img
                                src='cookiesAndCreamCake'
                                width={250}
                                height={300}
                                className='rounded'
                            />
                            <p className="mt-2 font-weight-bold">description</p>
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})
