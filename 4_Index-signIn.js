/// <reference types="Cypress" />

describe('Sign In', () => {
    it('Capture the button', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').screenshot('signIn_1')
    })
    it('Verify redirection of the button', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
        cy.url().should('include', 'my-account')
        cy.screenshot('signIn_2')
    })
})