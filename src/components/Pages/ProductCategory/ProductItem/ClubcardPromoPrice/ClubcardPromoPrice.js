import PropTypes from 'prop-types'

import currencyFormatter from 'components/formatters/currencyFormatter'

import translate from 'translate'

export const ClubcardPromoPrice = ({ currency, lang, price, discountPercent, strings }) => {
  const amount = parseFloat(((discountPercent / 100) * price).toFixed(2))

  return (
    <div className='row'>
      <div className='col-12'>
        <p className='p-2 m-0 alert alert-warning text-center border border-warning'>
          {strings.label}: {currencyFormatter(lang, currency[lang], price - amount)}
        </p>
      </div>
    </div>
  )
}

ClubcardPromoPrice.propTypes = {
  strings: PropTypes.object.isRequired,
  currency: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercent: PropTypes.number.isRequired,
}

ClubcardPromoPrice.defaultProps = {
  strings: {
    label: 'Clubcard price',
  }
}


export default translate('Pages.ProductCategory.ProductItem.ClubcardPromoPrice')(ClubcardPromoPrice)