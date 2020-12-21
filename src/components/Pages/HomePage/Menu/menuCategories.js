import {
    winesBanner,
    specialWineBanner
} from 'images'

const menuCategories = [
    {
        title: 'Food',
        featureMenu: {
            items: [
                {
                    image: winesBanner,
                    title: 'Get delicious wines',
                    description: 'Place your order now to get delicious wines delivered to your door',
                    link: 'Shop rosé prosecco'
                },
                {
                    image: specialWineBanner,
                    title: 'Wines delivered to your door',
                    description: 'Place your order now to get delicious wines delivered to your door',
                    link: 'Shop more wine'
                }
            ],
            buttonLabel: 'More In Food'
        },
        subCategories: [
            {
                title: 'Celebration Cakes',
                categories: [
                    'All Cakes', 'Cakes for Collection',
                    'Cakes Delivered', 'Birthday Cakes',
                    'Personalised Cakes'
                ]
            },
            {
                title: 'Food Hampers & Gifts',
                categories: [
                    'All Food & Alcohol Gifts',
                    'Fruit Baskets'
                ]
            },
            {
                title: 'Wine Shop',
                categories: [
                    'All Wine Cases',
                    'Prosecco & Sparkling',
                    'Christmas Drinks'
                ]
            },
            {
                title: 'G&S Food In Store',
                categories: [
                    'Watch our TV ad',
                    'Our Brands',
                    'Dine in',
                    'Health Hub',
                    'In Store Offers'
                ]
            }
        ]
    }
]

export default menuCategories