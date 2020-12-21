import {
    winesBanner,
    specialWineBanner
} from 'images'

const featureMenu = {
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
}

const menuCategories = [
    {
        title: 'Furniture',
        featureMenu: featureMenu,
        subCategories: [
            {
                title: 'Sofas - from £499',
                categories: [
                    'Sofas', 'Armchairs', 'Footstools', 'Loveseats',
                    'Corner Sofas', 'Sofa Beds'
                ]
            },
            {
                title: 'Living Room - from £79',
                categories: [
                    'Living Room Furniture', 'Bookcases & Shelving', 'Coffee Tables',
                    'Console Tables', 'Side Tables & Nests', 'TV Units', 'Lighting'
                ]
            },
            {
                title: 'Bedroom - from £69',
                categories: [
                    'Bedroom Furniture', 'Beds', 'Divan Beds', 'Bedside Tables',
                    'Chests of Drawers', 'Dressing Tables', 'Mattresses', 'Wardrobes'
                ]
            },
        ]
    },
    {
        title: 'Food',
        featureMenu: featureMenu,
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
    },
    {
        title: 'Flowers',
        featureMenu: featureMenu,
        subCategories: [
            {
                title: 'Flowers',
                categories: [
                    'All Flowers', 'Bouquets',
                    'Collection Flowers', 'Flower Gift Bags',
                    'Letterbox Flowers', 'Flowers £25 and under',
                    'Flower Subscriptions', 'Artificial Flowers and Plants'
                ]
            },
            {
                title: 'Shop by Occasion',
                categories: [
                    'Anniversary Flowers', 'Birthday Flowers', 'Congratulations Flowers',
                    'Just Becasuse Flowers', 'Thank You Flowers'
                ]
            },
        ]
    }
]

export default menuCategories