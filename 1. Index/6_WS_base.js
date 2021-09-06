/// <reference types="Cypress" />

describe('WS_Base', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Capture the button state before hover', () => {
      cy
      .get('#block_top_menu > ul > li:nth-child(1) > a').screenshot('wsbase_1')
    })

    it('Capture the button state on hover', () => {
        const wsbutton = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wsbutton.trigger('mouseover').focus().screenshot('wsbase_2')

        const dropdown = cy.get('#block_top_menu > ul > li:nth-child(1) > ul')
        dropdown.invoke('focus').screenshot('wsbase_3')

        const limenu = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1)')
        limenu.screenshot('wsbase_4')
        limenu.should('contain', 'Tops')
        
        const ulmenu = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul')
        ulmenu.screenshot('wsbase_5')
        ulmenu.children()
        .should('contain.text', 'T-shirts')
        .and('contain.text', 'Blouses')
        // cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1)').screenshot('wsbase_4')

    })
})