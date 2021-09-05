/// <reference types="Cypress" />

describe('First Access', () => {
    it('Visit automation practice', () => {
      cy.visit('http://automationpractice.com/index.php')
      cy.screenshot('firstaccess')
    })
})