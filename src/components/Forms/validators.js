export const composeValidators = (...validators) => (value, allValues) => {
    return validators.reduce((error, validator) => error || validator(value, allValues), undefined)
}

export const required = value => (value ? undefined : 'Required')

export const validateNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email) ? undefined : 'Invalid format'
}

export const validateCreditCardNumber = (creditCardNumber, allValues) => {
    const cardTypes = {
        'visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'mastercard': /^5[1-5][0-9]{14}$/
    }

    const type = allValues['credit_card_type']

    return cardTypes[type].test(creditCardNumber) ? undefined : 'Invalid format'
}

export const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(phone) ? undefined : 'Invalid format'
}