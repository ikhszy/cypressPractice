/// <reference types="Cypress" />

describe('WS_Base', () => {
    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Capture the button state before and on hover', () => {
        // define the button first
        const tshirts = cy.get('#block_top_menu > ul > li:nth-child(3) > a')
        
        //check the default state of button
        tshirts.should('be.visible')
        .and('contain.text', '')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })
})