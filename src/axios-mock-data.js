export const items = [
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

export const comments = {
    'all-cakes': {
        1: [
            {
                id: 1,
                user: 'User 1',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 2,
                user: 'User 2',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 3,
                user: 'User 3',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 4,
                        user: 'User 3-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 5,
                        user: 'User 3-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        2: [
            {
                id: 6,
                user: 'User 4',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 7,
                user: 'User 5',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 8,
                user: 'User 6',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 9,
                        user: 'User 6-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 10,
                        user: 'User 6-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        3: [
            {
                id: 11,
                user: 'User 7',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 12,
                user: 'User 8',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 13,
                user: 'User 9',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 14,
                        user: 'User 9-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 15,
                        user: 'User 9-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        4: [
            {
                id: 16,
                user: 'User 10',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 17,
                user: 'User 11',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 18,
                user: 'User 12',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 19,
                        user: 'User 12-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 20,
                        user: 'User 12-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        5: [
            {
                id: 21,
                user: 'User 13',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 22,
                user: 'User 14',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 23,
                user: 'User 15',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 24,
                        user: 'User 15-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 25,
                        user: 'User 15-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        6: [
            {
                id: 26,
                user: 'User 16',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 27,
                user: 'User 17',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 28,
                user: 'User 18',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 29,
                        user: 'User 18-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 30,
                        user: 'User 18-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        7: [
            {
                id: 31,
                user: 'User 19',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 32,
                user: 'User 20',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 33,
                user: 'User 21',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 34,
                        user: 'User 21-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 35,
                        user: 'User 21-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ],
        8: [
            {
                id: 36,
                user: 'User 22',
                image: 'https://randomuser.me/api/portraits/men/11.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 37,
                user: 'User 23',
                image: 'https://randomuser.me/api/portraits/men/12.jpg',
                posted: '1 month ago',
                value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                votes: 12,
                replies: []
            },
            {
                id: 38,
                user: 'User 24',
                image: 'https://randomuser.me/api/portraits/men/18.jpg',
                posted: '2 weeks ago',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias ullam repellendus nemo facere omnis nisi! Vero, sit dolore? Distinctio voluptatibus cupiditate a numquam omnis facilis enim sapiente quidem architecto!',
                votes: 5,
                replies: [
                    {
                        id: 39,
                        user: 'User 24-1',
                        image: 'https://randomuser.me/api/portraits/women/11.jpg',
                        posted: '1 week ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 4,
                        replies: []
                    },
                    {
                        id: 40,
                        user: 'User 24-2',
                        image: 'https://randomuser.me/api/portraits/women/14.jpg',
                        posted: '2 days ago',
                        value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse autem inventore pariatur, ad possimus doloremque sed accusantium quibusdam deleniti.',
                        votes: 2,
                        replies: []
                    }
                ]
            }
        ]
    }
}