import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

mock.onGet('/category/all-cakes').reply(200, {
    items: [
        {
            id: 1,
            name: 'Cookies And Cream Cake',
            image: 'cookiesAndCreamCake',
            label: 'Collect in 5 days',
            price: '£30.00',
            rating: 4
        },
        {
            id: 2,
            name: 'Dribble Cake',
            image: 'dribbleCake',
            label: 'Collect in 6 days',
            price: '£35.00',
            rating: 5
        },
        {
            id: 3,
            name: 'Flower Festival Tulip Cake',
            image: 'flowerFestivalTulipCake',
            label: 'Collect in 5 days',
            price: '£40.00',
            rating: 4
        },
        {
            id: 4,
            name: 'Milk Chocolate Layers Cake',
            image: 'milkChocolateLayersCake',
            label: 'Collect in 6 days',
            price: '£30.00',
            rating: 5
        },
        {
            id: 5,
            name: 'Rainbow Layers Cake',
            image: 'rainbowLayersCake',
            label: 'Collect in 5 days',
            price: '£45.00',
            rating: 4
        },
        {
            id: 6,
            name: 'Triple Layer Cake',
            image: 'tripleLayerCake',
            label: 'Collect in 6 days',
            price: '£35.00',
            rating: 5
        },
        {
            id: 7,
            name: 'True Love Cake',
            image: 'trueLoveCake',
            label: 'Collect in 5 days',
            price: '£30.00',
            rating: 4
        },
        {
            id: 8,
            name: 'Vanilla Cake',
            image: 'vanillaCake',
            label: 'Collect in 6 days',
            price: '£35.00',
            rating: 5
        }
    ]
});
