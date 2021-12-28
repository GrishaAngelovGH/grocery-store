import {
    winesBanner,
    specialWineBanner
} from 'images'

import menuLinksFormatter from 'components/formatters/menuLinksFormatter'

const featureMenuBG = {
    items: [
        {
            image: winesBanner,
            title: 'Намерете вкусно вино',
            description: 'Поръчайте вино сега и ще получите доставка до вашата врата',
            link: 'Поръчай rosé prosecco',
        },
        {
            image: specialWineBanner,
            title: 'Доставка на вино до вашата врата',
            description: 'Поръчайте вино сега и ще получите доставка до вашата врата',
            link: 'Още вино'
        }
    ],
    buttonLabel: 'Виж повече от категория Храна'
}

const featureMenuEN = {
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

const menuCategories = {
    en: [
        {
            title: 'Furniture',
            featureMenu: featureMenuEN,
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
            featureMenu: featureMenuEN,
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
            featureMenu: featureMenuEN,
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
    ],
    bg: [
        {
            title: 'Мебели',
            featureMenu: featureMenuBG,
            subCategories: [
                {
                    title: 'Дивани - от 499лв',
                    categories: [
                        'Дивани', 'Кресла', 'Табуретки', 'Двойно кресло',
                        'Ъглови дивани', 'Разтегателни дивани'
                    ]
                },
                {
                    title: 'Всекидневна - от 79лв',
                    categories: [
                        'Мебели за всекидневна', 'Рафтове за книги', 'Холни маси',
                        'Конзолни маси', 'Странични масички и гнезда', 'Маси за ТВ', 'Осветление'
                    ]
                },
                {
                    title: 'Спалня - от 69лв',
                    categories: [
                        'Мебели за спалня', 'Легла', 'Диван Легла', 'Нощни шкафчета',
                        'Скринове', 'Тоалетки', 'Матраци', 'Гардероби'
                    ]
                },
            ]
        },
        {
            title: 'Храна',
            featureMenu: featureMenuBG,
            subCategories: [
                {
                    title: 'Празнични торти',
                    categories: [
                        'Всички торти', 'Колекция торти',
                        'Доставени торти', 'Торти за рожден ден',
                        'Персонализирани торти'
                    ]
                },
                {
                    title: 'Храни и подаръци',
                    categories: [
                        'Всички подаръци - храна и алкохол',
                        'Кошници с плодове'
                    ]
                },
                {
                    title: 'Магазин за вино',
                    categories: [
                        'Всички кутии за вино',
                        'Просеко и пенливо вино',
                        'Коледни напитки'
                    ]
                },
                {
                    title: 'G&S Храна в магазина',
                    categories: [
                        'Гледайте нашата ТВ реклама',
                        'Нашите марки',
                        'Вечеря на място',
                        'Здравословни храни',
                        'Оферти на място'
                    ]
                }
            ]
        },
        {
            title: 'Цветя',
            featureMenu: featureMenuBG,
            subCategories: [
                {
                    title: 'Цветя',
                    categories: [
                        'Всички цветя', 'Букети',
                        'Колекция цветя', 'Подаръчни комплекти с цветя',
                        'Цветя по пощата', 'Цветя под 25лв',
                        'Доставки на цветя', 'Изкуствени цветя и растения'
                    ]
                },
                {
                    title: 'Пазарувайте за поводи',
                    categories: [
                        'Цветя за годишнини', 'Цветя за рождени дни', 'Цветя за поздравления',
                        'Просто цветя', 'Цветя за благодарност'
                    ]
                },
            ]
        }
    ]
}

export default menuLinksFormatter(menuCategories)