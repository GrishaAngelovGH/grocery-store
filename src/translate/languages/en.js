export default {
    'HeaderBar': {
        messages: [
            'Beat the queues - Sparks Book & Shop',
            'Get 50% discount',
            'View latest products'
        ],
        help: 'Help',
        findStore: 'Find a store'
    },
    'Pages.Checkout': {
        billing: 'Billing',
        shipping: 'Shipping',
        payment: 'Payment',
        preview: 'Preview'
    },
    'Pages.Checkout.CheckoutSteps.Billing': {
        billing: 'Billing',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        example: 'ex',
        billingAddress: 'Address',
        postCode: 'Post Code',
        country: 'Country',
        bg: 'Bulgaria',
        uk: 'United Kingdom',
        de: 'Germany'
    },
    'Pages.Checkout.CheckoutSteps.Shipping': {
        shipping: 'Shipping',
        currency: '£',
        usps_fcpi: {
            label: 'USPS First Class Package International',
            delivery: '7 to 21 business days'
        },
        usps_pmi: {
            label: 'USPS Priority Mail International',
            delivery: '6 to 10 business days'
        },
        usps_pmei: {
            label: 'USPS Priority Mail Express International',
            delivery: '3 to 5 business days'
        },
        dhl_ew: {
            label: 'DHL Express Worldwide',
            delivery: '2 to 3 business days'
        }
    },
    'Pages.Checkout.CheckoutSteps.Payment': {
        payment: 'Payment',
        creditCard: 'Credit Card',
        example: 'ex',
        creditCardNumber: 'Credit Card Number',
        expirationDate: 'Expiration Date (MMYYYY)'
    },
    'Pages.Checkout.CheckoutSteps.Preview': {
        preview: 'Preview',
        total: 'Total',
        placeOrder: 'Place Order',
        tableColumns: {
            item: 'Item',
            qty: 'Qty',
            price: 'Price',
            subtotal: 'Subtotal',
            shippingMethod: 'Shipping Method'
        }
    },
    'Pages.Checkout.CheckoutSteps': {
        successMessage: 'Your order has been successfully placed'
    },
    'Pages.Checkout.CheckoutSteps.Step': {
        prev: 'Prev',
        next: 'Next'
    },
    'Pages.Comments': {
        title: 'Comments'
    },
    'Pages.Comments.Comment': {
        reply: 'Reply',
        defaultAuthor: 'You'
    },
    'Pages.Comments.ReplyPanel': {
        placeholder: 'Add a comment...',
        send: 'Send',
        replyTo: 'Reply to',
        defaultAuthor: 'You'
    },
    'Pages.HomePage.HelpLinks': {
        homeDelivery: 'Free home delivery when you spend over £50',
        order: 'Order by 8pm for next-day delivery for £4.99',
        shop: 'Shop with confidence with our extended returns policy'
    },
    'Pages.HomePage.PromoDeals': {
        label: 'deals of the week',
        deals: [
            {
                category: 'offers',
                description: 'see all offers',
                linkTitle: 'Shop now'
            },
            {
                category: 'women',
                description: '30% off selected womenswear',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'lingerie',
                description: '30% off selected nightwear',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'men',
                description: '2 for £60 on lambswool jumpers',
                linkTitle: 'Shop the offer'
            },
            {
                category: 'women',
                description: '30% of boots',
                linkTitle: 'Shop the offer'
            }
        ]
    },
    'Pages.HomePage.PromoProducts': {
        label: 'G&S Food',
        products: images => {
            const items = [
                {
                    imageLabel: 'Special offers',
                    description: 'Save up to 1/3 on selected wines',
                    linkTitle: 'Shop wine by the case'
                },
                {
                    imageLabel: 'Limited offers',
                    description: 'Save up to 20% on selected wines',
                    linkTitle: 'Shop wine by the case'
                },
                {
                    imageLabel: 'Free delivery',
                    description: 'Save £5 on selected bouquets',
                    linkTitle: 'Shop now'
                }
            ]

            return items.map((v, i) => ({ image: images[i], ...v }))
        }
    },
    'Pages.OrderHistory': {
        orderHistory: 'Order History',
        orderId: 'OrderId',
        date: 'Date',
        paymentMethod: 'Payment Method',
        creditCard: 'Credit Card',
        payPal: 'PayPal',
        creditCardNumber: 'Credit Card Number',
        status: {
            all: 'All',
            pending: 'Pending Order',
            cancelled: 'Cancelled Order'
        },
        tableColumns: {
            item: 'Item',
            qty: 'Qty',
            price: 'Price',
            subtotal: 'Subtotal',
            shippingMethod: 'Shipping Method'
        },
        total: 'Total',
        shippingMethods: {
            usps_fcpi: 'USPS First Class Package International',
            usps_pmi: 'USPS Priority Mail International',
            usps_pmei: 'USPS Priority Mail Express International',
            dhl_ew: 'DHL Express Worldwide'
        }
    },
    'Pages.PageComponents.HeaderSection.Search': {
        placeholder: 'Search'
    },
    'Pages.PageComponents.HeaderSection.Menu': {
        availableItems: 'Only the following items are available',
        links: 'Food > Celebration Cakes > All cakes'
    },
    'Pages.PageComponents.HeaderSection.MiniShoppingBag': {
        bag: 'Bag',
        viewBag: 'View Bag',
        checkoutBtn: 'Checkout',
        itemLabel: {
            value: 'item',
            plural: 's'
        }
    },
    'Pages.PageComponents.HeaderSection.MiniShoppingBag.ShoppingBagItems.ShoppingBagItem': {
        qty: 'Qty'
    },
    'Pages.PageComponents.HeaderSection.SidebarMenu': {
        availableItems: 'Only the following items are available',
        links: 'Food > Celebration Cakes > All cakes',
        allCategories: 'All Categories'
    },
    'Pages.ProductCategory.EmptyProductCategory': {
        label: 'No items were found for this category',
        availableItems: 'Only available items are in Food > Celebration Cakes > All Cakes',
        continueBtn: 'Continue'
    },
    'Pages.ProductCategory.ProductItem': {
        message: 'Item added to shopping bag',
        addToBagBtn: 'Add To Bag'
    },
    'Pages.ProductCategory.ProductItem.ClubcardPromoPrice': {
        label: 'Clubcard price'
    },
    'Pages.ProductCategory.ProductItem.ProductDescription': {
        dimensions: 'Dimensions',
        h: 'h',
        w: 'w',
        weight: 'Weight',
        g: 'g',
        mm: 'mm'
    },
    'Pages.ShoppingBag.ShoppingBagItem': {
        price: 'Price',
        qty: 'Qty',
        subtotal: 'Subtotal',
        removeBtn: 'Remove'
    },
    'Pages.ShoppingBag': {
        shoppingBag: 'Shopping bag',
        summary: 'Summary',
        total: 'Total',
        checkoutBtn: 'Checkout',
        emptyBag: 'Empty Bag',
        fillingBag: 'Your bag needs filling',
        continueBtn: 'Continue Shopping'
    },
    'Pages.HomePage.HelpButtons.DeliveryButton': {
        label: 'Free home delivery when you spend over £50'
    },
    'Pages.HomePage.HelpButtons.NextDayDeliveryButton': {
        label: 'Order clothing & home by 8pm for next-day delivery (£4.99)'
    },
    'Pages.HomePage.HelpButtons.ReturnDeliveryButton': {
        label: 'Shop with confidence with our extended returns policy'
    },
    'Pages.HomePage.FreeShoppingBanner': {
        title: '12 DAYS OF GIVEAWAYS',
        content: 'FREE SHOPPING FOR 50 SPARKS CUSTOMERS EVERY DAY',
        linkText: 'Find out more'
    }
}