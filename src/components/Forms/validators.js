export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => (value ? undefined : 'Required')

export const validateNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email) ? undefined : 'Invalid format'
}