/// <reference types="Cypress" />

describe('WS_Base', () => {
    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Capture whether contains the right images', () => {
        // Array of image name
        const banner = [
            'sample-3',
            'sample-1',
            'sample-2',
            'sample-3',
            'sample-1'
          ]
          
          // check the length of the list
          cy.get('#homepage-slider > div > div.bx-viewport').invoke('hover', 500)

          cy.get('#homeslider > li').each((item, index, list) => {
          expect(list).to.have.length(5);
  
          // check if the list contains right image sources
        //   cy.wrap(item).find('img').should('have.attr', 'src').should('contains', banner[index])

          // check if the images contains the right name
          const img = cy.wrap(item, {timeout: 10000}).find('img').should(($images) => {
            expect($images).to.have.attr('src').contains(banner[index])
          })

          //check if the images using the right size
          img.should('have.attr', 'width').should('eq', '779')
        })
    })
})  