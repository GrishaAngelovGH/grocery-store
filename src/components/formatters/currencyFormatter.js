const currencyFormatter = (lang, currency, price) =>
    lang === 'en' ? `${currency}${price}` : `${price}${currency}`

export default currencyFormatter