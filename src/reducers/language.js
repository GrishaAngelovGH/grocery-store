const initialValue = 'en'

const changeLaguageHandler = (state, { language }) => language

export default (state = initialValue, action) => {
    const handlers = {
        'CHANGE_LANGUAGE': changeLaguageHandler
    }

    const handler = handlers[action.type]

    return handler ? handler(state, action) : state
}