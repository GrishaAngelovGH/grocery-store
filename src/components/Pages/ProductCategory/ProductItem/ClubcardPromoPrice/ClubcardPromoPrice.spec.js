import { ClubcardPromoPrice } from './ClubcardPromoPrice'

describe('(Component) ClubcardPromoPrice', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <ClubcardPromoPrice
        currency={{ en: '£' }}
        lang='en'
        price={10}
        discountPercent={2}
      />
    )

    expect(wrapper.equals(
      <div className='row'>
        <div className='col-12'>
          <p className='p-2 m-0 alert alert-warning text-center border border-warning'>
            Clubcard price: £9.8
          </p>
        </div>
      </div>
    )).to.equal(true)
  })
})
