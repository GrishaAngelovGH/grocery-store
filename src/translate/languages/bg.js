export default {
    'HeaderBar': {
        messages: [
            'Изпревари всички - Ползвай Sparks Book & Shop',
            'Вземи 50% намаление',
            'Прегледай нови предложения'
        ],
        help: 'Помощ',
        findStore: 'Намери магазин'
    },
    'Pages.Checkout': {
        billing: 'Билинг адрес',
        shipping: 'Метод на доставка',
        payment: 'Метод на плащане',
        preview: 'Преглед'
    },
    'Pages.Checkout.CheckoutSteps.Billing': {
        billing: 'Билинг адрес',
        firstName: 'Име',
        lastName: 'Фамилия',
        email: 'Електронна поща',
        phone: 'Телефон',
        example: 'пр',
        billingAddress: 'Адрес',
        postCode: 'Пощенски код',
        country: 'Държава',
        bg: 'България',
        uk: 'Великобритания',
        de: 'Германия'
    },
    'Pages.Checkout.CheckoutSteps.Shipping': {
        shipping: 'Метод на доставка',
        currency: 'лв',
        usps_fcpi: {
            label: 'USPS Международен пакет от първа класа',
            delivery: '7 до 21 работни дни'
        },
        usps_pmi: {
            label: 'USPS Международна приоритетна поща',
            delivery: '6 до 10 работни дни'
        },
        usps_pmei: {
            label: 'USPS Международна експресна приоритетна поща',
            delivery: '3 до 5 работни дни'
        },
        dhl_ew: {
            label: 'DHL Експрес',
            delivery: '2 до 3 работни дни'
        }
    },
    'Pages.Checkout.CheckoutSteps.Payment': {
        payment: 'Метод на плащане',
        creditCard: 'Кредитна карта',
        example: 'пр',
        creditCardNumber: 'Номер на кредитна карта',
        expirationDate: 'Дата на валидност (ММГГГГ)'
    },
    'Pages.Checkout.CheckoutSteps.Preview': {
        preview: 'Преглед',
        total: 'Общо',
        placeOrder: 'Направи поръчка'
    },
    'Pages.Checkout.CheckoutSteps': {
        successMessage: 'Вашата поръчка е направена успешно'
    },
    'Pages.Checkout.CheckoutSteps.Step': {
        prev: 'Назад',
        next: 'Напред'
    },
    'Pages.Comments': {
        title: 'Коментари'
    },
    'Pages.Comments.Comment': {
        reply: 'Отговор',
        defaultAuthor: 'Ти'
    },
    'Pages.Comments.ReplyPanel': {
        placeholder: 'Добави коментар...',
        send: 'Изпрати',
        replyTo: 'Отговор до',
        defaultAuthor: 'Ти'
    },
    'Pages.HomePage.HelpLinks': {
        homeDelivery: 'Безплатна доставка за поръчка над 50лв',
        order: 'Доставка на следващия ден при поръчка до 20:00ч',
        shop: 'Пазарувай уверено с възможност за връщане на стока'
    },
    'Pages.HomePage.PromoDeals': {
        label: 'сделки на седмицата',
        deals: [
            {
                category: 'оферти',
                description: 'виж всички оферти',
                linkTitle: 'Пазарувай'
            },
            {
                category: 'жени',
                description: '30% отстъпка за дамско облекло',
                linkTitle: 'Пазарувай'
            },
            {
                category: 'бельо',
                description: '30% отстъпка за пижами',
                linkTitle: 'Пазарувай'
            },
            {
                category: 'мъже',
                description: '2 броя пуловери за 60лв ',
                linkTitle: 'Пазарувай'
            },
            {
                category: 'жени',
                description: '30% отстъпка за ботуши',
                linkTitle: 'Пазарувай'
            }
        ]
    },
    'Pages.HomePage.PromoProducts': {
        label: 'G&S Храна',
        products: images => {
            const items = [
                {
                    imageLabel: 'Специални оферти',
                    description: 'Спести до 1/3 от цената за избрано вино',
                    linkTitle: 'Пазарувай'
                },
                {
                    imageLabel: 'Лимитирани оферти',
                    description: 'Спести до 20% от избрано вино',
                    linkTitle: 'Пазарувай'
                },
                {
                    imageLabel: 'Безплатна доставка',
                    description: 'Спести 5лв от избрани букети',
                    linkTitle: 'Пазарувай'
                }
            ]

            return items.map((v, i) => ({ image: images[i], ...v }))
        }
    },
    'Pages.PageComponents.HeaderSection.Search': {
        placeholder: 'Търси'
    },
    'Pages.PageComponents.HeaderSection.Menu': {
        availableItems: 'Налични са само следните продукти',
        links: 'Храна > Празнични торти > Всички торти'
    },
    'Pages.PageComponents.HeaderSection.MiniShoppingBag': {
        bag: 'Кошница',
        viewBag: 'Виж кошница',
        checkoutBtn: 'Чекаут',
        itemLabel: {
            value: 'продукт',
            plural: 'а'
        }
    },
    'Pages.PageComponents.HeaderSection.MiniShoppingBag.ShoppingBagItems.ShoppingBagItem': {
        qty: 'Количество',
        removeBtn: 'Премахни'
    },
    'Pages.PageComponents.HeaderSection.SidebarMenu': {
        availableItems: 'Налични са само следните продукти',
        links: 'Храна > Празнични торти > Всички торти',
        allCategories: 'Всички категории'
    },
    'Pages.ProductCategory.EmptyProductCategory': {
        label: 'Няма намерени продукти за тази категория',
        availableItems: 'Налични са само следните продукти в Храна > Празнични торти > Всички торти',
        continueBtn: 'Продължи'
    },
    'Pages.ProductCategory.ProductItem': {
        message: 'Продукта е добавен в кошницата',
        addToBagBtn: 'Добави в кошница'
    },
    'Pages.ShoppingBag.ShoppingBagItem': {
        price: 'Цена',
        qty: 'Количество',
        subtotal: 'Междинна сума',
        removeBtn: 'Премахни'
    },
    'Pages.ShoppingBag': {
        shoppingBag: 'Потребителска Кошница',
        summary: 'Резюме на поръчката',
        total: 'Обща сума',
        checkoutBtn: 'Чекаут',
        emptyBag: 'Празна кошница',
        fillingBag: 'Добави продукти в кошницата за да завършиш поръчка',
        continueBtn: 'Продължи пазаруване'
    },
    'Pages.HomePage.HelpButtons.DeliveryButton': {
        label: 'Безплатна доставка до дома за поръчка над 50лв.'
    },
    'Pages.HomePage.HelpButtons.NextDayDeliveryButton': {
        label: 'Всяка поръчка до 8ч. вечерта, ще бъде доставена следващия ден (10лв.)'
    },
    'Pages.HomePage.HelpButtons.ReturnDeliveryButton': {
        label: 'Пазарувай с увереност, предлагаме връщане на стока при поискване'
    },
    'Pages.HomePage.FreeShoppingBanner': {
        title: 'РАЗДАВАМЕ ПОДАРЪЦИ 12 ДНИ',
        content: 'БЕЗПЛАТНО ПАЗАРУВАНЕ ЗА 50 КЛИЕНТИ ВСЕКИ ДЕН',
        linkText: 'Научи повече'
    }
}