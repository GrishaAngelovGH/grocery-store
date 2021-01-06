export const changeShippingMethod = (shippingMethod, price) => ({
    type: 'CHANGE_SHIPPING_METHOD',
    shippingMethod: shippingMethod,
    price: price
})