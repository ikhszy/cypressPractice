/// <reference types="Cypress" />

describe('WS_Base', () => {
    before(() => {
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

        const limenu1 = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1)')
        limenu1.screenshot('wsbase_4')
        limenu1.should('contain', 'Tops')
        
        const ulmenu1 = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul')
        ulmenu1.screenshot('wsbase_5')
        ulmenu1.children()
        .should('contain.text', 'T-shirts')
        .and('contain.text', 'Blouses')

        const limenu2 = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2)')
        limenu2.screenshot('wsbase_6')
        limenu2.should('contain', 'Dresses')
        
        const ulmenu2 = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul')
        ulmenu2.screenshot('wsbase_7')
        ulmenu2.children()
        .should('contain.text', 'Casual Dresses')
        .and('contain.text', 'Evening Dresses')
        .and('contain.text', 'Summer Dresses')
        })        

    it('Click on the tops button', () => {
        const wstops = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wstops.trigger('mouseover').focus().screenshot('ws_tops1')

        const topsbtn = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > a')
        topsbtn.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=4&controller=category")
        
        topsbtn.click()
        cy.url().should('include','category')
        cy.screenshot('ws_tops2')
        })
    
    it('Click on the dresses button', () => {
        const wsdresses = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wsdresses.trigger('mouseover').focus().screenshot('ws_dresses1')

        const dressesbtn = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > a')
        dressesbtn.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=8&controller=category")
        
        dressesbtn.click()
        cy.url().should('include','category=8')
        cy.screenshot('ws_dresses2')
        })
    
    it('Click on the T-Shirts button', () => {
        const wstshirts = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wstshirts.trigger('mouseover').focus().screenshot('ws_tshirts1')

        const tshrtbtn = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(1) > a')
        tshrtbtn.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=5&controller=category")
        
        tshrtbtn.click()
        cy.url().should('include','category=5')
        cy.screenshot('ws_tshirts2')
        })
    
    it('Click on the Blouses button', () => {
        const wsblouses = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wsblouses.trigger('mouseover').focus().screenshot('ws_blouses1')

        const blousesbtn = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(2) > a')
        blousesbtn.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=7&controller=category")
        
        blousesbtn.click()
        cy.url().should('include','category=7')
        cy.screenshot('ws_blouses2')
        })
    
    it('Click on the Casual Dresses button', () => {
        const wscdresses = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wscdresses.trigger('mouseover').focus().screenshot('ws_cdresses1')

        const cdressbutton = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(1) > a')
        cdressbutton.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=9&controller=category")
        
        cdressbutton.click()
        cy.url().should('include','category=9')
        cy.screenshot('ws_cdresses2')
        })
    
    it('Click on the Evening Dresses button', () => {
        const wsedresses = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wsedresses.trigger('mouseover').focus().screenshot('ws_edresses1')

        const edressbutton = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
        edressbutton.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=10&controller=category")
        
        edressbutton.click()
        cy.url().should('include','category=10')
        cy.screenshot('ws_edresses2')
        })

    it('Click on the Summer Dresses button', () => {
        const wssdresses = cy.get('#block_top_menu > ul > li:nth-child(1) > a')
        wssdresses.trigger('mouseover').focus().screenshot('ws_sdresses1')

        const edressbutton = cy.get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a')
        edressbutton.should('be.visible')
        .and('have.attr', 'href', "http://automationpractice.com/index.php?id_category=11&controller=category")
        
        edressbutton.click()
        cy.url().should('include','category=11')
        cy.screenshot('ws_sdresses2')
        })
})