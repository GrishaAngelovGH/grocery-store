import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

mock.onGet('/category/all-cakes').reply(200, {
    items: [
        {
            id: 1,
            name: {
                en: 'Cookies And Cream Cake',
                bg: 'Торта с бисквитки и крем'
            },
            image: 'cookiesAndCreamCake',
            label: {
                en: 'Collect in 5 days',
                bg: 'Доставка в рамките на 5 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 30.00,
            rating: 4
        },
        {
            id: 2,
            name: {
                en: 'Dribble Cake',
                bg: 'Дрибъл торта'
            },
            image: 'dribbleCake',
            label: {
                en: 'Collect in 6 days',
                bg: 'Доставка в рамките на 6 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 35.00,
            rating: 5
        },
        {
            id: 3,
            name: {
                en: 'Flower Festival Tulip Cake',
                bg: 'Торта с лалета'
            },
            image: 'flowerFestivalTulipCake',
            label: {
                en: 'Collect in 5 days',
                bg: 'Доставка в рамките на 5 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 40.00,
            rating: 4
        },
        {
            id: 4,
            name: {
                en: 'Milk Chocolate Layers Cake',
                bg: 'Торта със слоеве от млечен шоколад'
            },
            image: 'milkChocolateLayersCake',
            label: {
                en: 'Collect in 6 days',
                bg: 'Доставка в рамките на 6 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 30.00,
            rating: 5
        },
        {
            id: 5,
            name: {
                en: 'Rainbow Layers Cake',
                bg: 'Торта със слоеве дъга'
            },
            image: 'rainbowLayersCake',
            label: {
                en: 'Collect in 5 days',
                bg: 'Доставка в рамките на 5 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 45.00,
            rating: 4
        },
        {
            id: 6,
            name: {
                en: 'Triple Layer Cake',
                bg: 'Торта с три слоя'
            },
            image: 'tripleLayerCake',
            label: {
                en: 'Collect in 6 days',
                bg: 'Доставка в рамките на 6 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 35.00,
            rating: 5
        },
        {
            id: 7,
            name: {
                en: 'True Love Cake',
                bg: 'Торта за влюбени'
            },
            image: 'trueLoveCake',
            label: {
                en: 'Collect in 5 days',
                bg: 'Доставка в рамките на 5 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 30.00,
            rating: 4
        },
        {
            id: 8,
            name: {
                en: 'Vanilla Cake',
                bg: 'Ванилова торта'
            },
            image: 'vanillaCake',
            label: {
                en: 'Collect in 6 days',
                bg: 'Доставка в рамките на 6 дни'
            },
            currency: {
                en: '£',
                bg: 'лв'
            },
            price: 35.00,
            rating: 5
        }
    ]
})
