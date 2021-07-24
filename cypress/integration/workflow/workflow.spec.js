const addItemByIndex = index => {
    cy.get('.col-md-6 > .m-3').eq(index).find('button').click()
}

const visitCakesCategory = () => {
    cy.visit('http://localhost:8080/#/category/all-cakes')
}

const visitShoppingBag = () => {
    cy.visit('http://localhost:8080/#/shopping-bag')
}

describe('Ecommerce App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('should add items to shopping bag', () => {
        visitCakesCategory()

        addItemByIndex(2)
        addItemByIndex(2)
        addItemByIndex(5)
        addItemByIndex(7)

        visitShoppingBag()

        cy.get('h4').eq(1).should('have.text', 'Total: £150')
    })

    it('should increase qty of added item', () => {
        visitCakesCategory()

        addItemByIndex(2)
        addItemByIndex(5)
        addItemByIndex(7)

        visitShoppingBag()

        cy.get('.btn-group').eq(1).find('button').eq(2).click()

        cy.get('h4').eq(1).should('have.text', 'Total: £145')
    })

    it('should decrease qty of added item', () => {
        visitCakesCategory()

        addItemByIndex(2)
        addItemByIndex(5)
        addItemByIndex(7)
        addItemByIndex(7)

        visitShoppingBag()

        cy.get('.btn-group').eq(2).find('button').eq(0).click()

        cy.get('h4').eq(1).should('have.text', 'Total: £110')
    })

    it('should remove item from shopping bag', () => {
        visitCakesCategory()

        addItemByIndex(2)
        addItemByIndex(2)
        addItemByIndex(5)
        addItemByIndex(7)

        visitShoppingBag()

        cy.get('h4').eq(1).should('have.text', 'Total: £150')

        cy.get('.row .mt-2').eq(1).find('button').click()

        cy.get('h4').eq(1).should('have.text', 'Total: £115')
    })

    it('should complete checkout process', () => {
        visitCakesCategory()

        addItemByIndex(2)
        addItemByIndex(5)
        addItemByIndex(7)

        visitShoppingBag()

        // click on Checkout button
        cy.get('.text-decoration-none').find('button').click()

        // populate Billing form

        cy.get('[name="firstName"]').type('John')

        cy.get('[name="lastName"]').type('Smith')

        cy.get('[name="email"]').type('some@some.com')

        cy.get('[name="phoneNumber"]').type('123-456-7890')

        cy.get('[name="billingAddress"]').type('221B Baker Street')

        cy.get('[name="postCode"]').type(1050)

        cy.get('button').click()

        // populate Shipping form

        cy.get('input').eq(2).click()

        cy.get('button').eq(1).click()

        // populate Payment form

        cy.get('[name="creditCardNumber"]').type(4111111111111)
        cy.get('[name="expirationDate"]').type(2322)

        cy.get('button').eq(1).click()

        // click on Place order button

        cy.get('[type="submit"]').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal(
                'Your order is successfullly placed: {"shipping_method":"usps_pmei","payment_method":"credit_card","credit_card_type":"visa","firstName":"John","lastName":"Smith","email":"some@some.com","phoneNumber":"123-456-7890","billingAddress":"221B Baker Street","postCode":"1050","creditCardNumber":"4111111111111","expirationDate":"2322"}'
            )
        })
    })
})