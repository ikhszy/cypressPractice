/// <reference types="Cypress" />

describe('WS_Base', () => {
    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Capture the button state before and on hover', () => {
        // define the button first
        const dsbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > a')

        // 1st check whether the button on default state
        dsbutton.should('be.visible')
        .and('contain.text', 'Dresses')
        .screenshot('dsbase_1')
        
        // 2nd check whether the button shows right on hover state
        dsbutton.invoke('mouseover').focus()
        .should('have.css', 'background-color', 'rgb(51, 51, 51)')
        .and('contain.text', 'Dresses')
        .screenshot('dsbase_2')

        // 3rd on whether the dropdown menu visible
        const ulmenu = cy.get('#block_top_menu > ul > li:nth-child(2) > ul')
        ulmenu.should('be.visible')
    })
})