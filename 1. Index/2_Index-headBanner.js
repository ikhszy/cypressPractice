/// <reference types="Cypress" />

describe('Head Banner', () => {
    it('Capture the head banner', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('#header > div.banner > div > div > a > img').screenshot('headBanner_1')
    })
    it('Verify redirection of head banner', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#header > div.banner > div > div > a > img').click()
        cy.wait(5)
        cy.url().should('include', '/index.php')
        cy.screenshot('headBanner_2')
    })
})