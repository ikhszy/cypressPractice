/// <reference types="Cypress" />

describe('Order', () => {
    it('Capture the button', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').screenshot('order_1')
    })
    it('Verify redirection of the button', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
        cy.url().should('include', 'order')
        cy.screenshot('order_2')
        cy.contains('Your shopping cart is empty.').screenshot('order_3')
    })
})