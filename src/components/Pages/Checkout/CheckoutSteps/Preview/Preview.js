const Preview = ({ items }) => {
    let total = 0
    const currency = items[0].currency

    items.forEach(v => {
        total += v.price * v.qty
    })

    return (
        <div className='row'>
            <div className='col-md-5'>
                {
                    items.map(v => (
                        <div key={v.description} className='font-weight-bold'>
                            <div>{v.description} {`(${v.currency}${v.price * v.qty})`}</div>
                        </div>
                    ))
                }
                <div className='mt-2 font-weight-bold'>
                    TOTAL: {currency}{total}
                </div>

                <button type='submit' className='btn btn-primary'>
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Preview