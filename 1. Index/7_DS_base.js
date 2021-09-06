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

    it('Click on Casual dress button and check the redirection', () => {
        const cdressbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')

        // verify if IT IS the right button
        cdressbutton.should('be.visible')
        .and('contain.text', 'Casual Dress')
        .and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=9&controller=category')
        .screenshot('dsbase_3')

        // verify the redirection is right
        cdressbutton.click()
        cy.url().should('equal', 'http://automationpractice.com/index.php?id_category=9&controller=category')
        
        const casualdressbanner = cy.get('#center_column > div.content_scene_cat > div')
        casualdressbanner.should('be.visible')
        .and('contain.text', 'Casual Dresses')

        cy.screenshot('dsbase_4')
    })

    it('Click on Evening dress button and check the redirection', () => {
        cy.visit('http://automationpractice.com/index.php') // based on the last tc, it will stay on casual dress page
        const dsbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > a')
        dsbutton.invoke('mouseover').focus()
        const evdressbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')

        // verify if IT IS the right button
        evdressbutton.should('be.visible')
        .and('contain.text', 'Evening Dress')
        .and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=10&controller=category')
        .screenshot('dsbase_5')

        // verify the redirection is right
        evdressbutton.click()
        cy.url().should('equal', 'http://automationpractice.com/index.php?id_category=10&controller=category')
        
        const eveningdressbanner = cy.get('#center_column > div.content_scene_cat > div')
        eveningdressbanner.should('be.visible')
        .and('contain.text', 'Evening Dresses')

        cy.screenshot('dsbase_6')
    })

    it('Click on Summer dress button and check the redirection', () => {
        cy.visit('http://automationpractice.com/index.php') // based on the last tc, it will stay on Evening dress page
        const dsbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > a')
        dsbutton.invoke('mouseover').focus()
        const smdressbutton = cy.get('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')

        // verify if IT IS the right button
        smdressbutton.should('be.visible')
        .and('contain.text', 'Summer Dress')
        .and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=11&controller=category')
        .screenshot('dsbase_7')

        // verify the redirection is right
        smdressbutton.click()
        cy.url().should('equal', 'http://automationpractice.com/index.php?id_category=11&controller=category')
        
        const summerdressbanner = cy.get('#center_column > div.content_scene_cat > div')
        summerdressbanner.should('be.visible')
        .and('contain.text', 'Summer Dresses')

        cy.screenshot('dsbase_8')
    })
})