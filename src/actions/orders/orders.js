export const saveOrder = order => ({
    type: 'SAVE_ORDER',
    order
})

export const cancelOrder = orderId => ({
    type: 'CANCEL_ORDER',
    orderId
})