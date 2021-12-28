import menuLinksFormatter from './menuLinksFormatter'

describe('(Formatter) Menu Links Formatter', () => {
    it('should menu links', () => {
        const menu = {
            en: [
                {
                    title: 'Furniture',
                    featureMenu: 'featureMenu',
                    subCategories: [
                        {
                            title: 'Sofas - from £499',
                            categories: [
                                'Sofas', 'Armchairs'
                            ]
                        },
                        {
                            title: 'Living Room - from £79',
                            categories: [
                                'Living Room Furniture', 'Bookcases & Shelving'
                            ]
                        }
                    ]
                }
            ],
            bg: [
                {
                    title: 'Мебели',
                    featureMenu: 'featureMenu',
                    subCategories: [
                        {
                            title: 'Дивани - от 499лв',
                            categories: [
                                'Дивани', 'Кресла'
                            ]
                        },
                        {
                            title: 'Всекидневна - от 79лв',
                            categories: [
                                'Мебели за всекидневна', 'Рафтове за книги'
                            ]
                        }
                    ]
                }
            ]
        }

        const expected = {
            en: [
                {
                    title: 'Furniture',
                    featureMenu: 'featureMenu',
                    subCategories: [
                        {
                            title: 'Sofas - from £499',
                            categories: [
                                { value: 'Sofas', link: '/category/sofas' },
                                { value: 'Armchairs', link: '/category/armchairs' }
                            ]
                        },
                        {
                            title: 'Living Room - from £79',
                            categories: [
                                { value: 'Living Room Furniture', link: '/category/living-room-furniture' },
                                { value: 'Bookcases & Shelving', link: '/category/bookcases-&-shelving' }
                            ]
                        }
                    ]
                }
            ],
            bg: [
                {
                    title: 'Мебели',
                    featureMenu: 'featureMenu',
                    subCategories: [
                        {
                            title: 'Дивани - от 499лв',
                            categories: [
                                { value: 'Дивани', link: '/category/sofas' },
                                { value: 'Кресла', link: '/category/armchairs' }
                            ]
                        },
                        {
                            title: 'Всекидневна - от 79лв',
                            categories: [
                                { value: 'Мебели за всекидневна', link: '/category/living-room-furniture' },
                                { value: 'Рафтове за книги', link: '/category/bookcases-&-shelving' }
                            ]
                        }
                    ]
                }
            ]
        }

        const actual = menuLinksFormatter(menu)

        expect(actual).to.eql(expected)
    })
})