/// <reference types="Cypress" />

describe('Contact Us', () => {
    it('Capture the button', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('#contact-link > a').screenshot('contactUs_1')
    })
    it('Verify redirection of the button', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#contact-link > a').click()
        cy.url().should('include', 'contact')
        cy.screenshot('contactUs_2')
    })
})