const FeatureMenu = ({ items, buttonLabel }) => (
    <div className='d-flex flex-column'>
        <div className='d-flex'>
            {
                items.map(v => (
                    <div key={v.title} className='m-2'>
                        <img src={v.image} width={200} heigth={200} />
                        <div className='small font-weight-bold'>{v.title}</div>
                        <div className='small text-secondary'>{v.description}</div>
                        <div className='small text-secondary feature-link'>{v.link}</div>
                    </div>
                ))
            }
        </div>
        <button type='button' className='btn btn-outline-dark m-2'>{buttonLabel}</button>
    </div>
)

export default FeatureMenu