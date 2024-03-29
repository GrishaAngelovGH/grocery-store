const ProductModal = ({ image, name, description }) => (
    <div className='modal fade' data-backdrop='static' id={`product-modal-${name.toLowerCase().replaceAll(' ', '-')}`} tabIndex='-1'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title'>{name}</h5>
                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true' className='bi bi-x'></span>
                    </button>
                </div>
                <div className='modal-body text-center'>
                    <img
                        src={image}
                        width={250}
                        height={300}
                        className='rounded'
                    />
                    <p className='mt-2 font-weight-bold'>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

export default ProductModal