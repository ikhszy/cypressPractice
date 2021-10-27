/// <reference types="Cypress" />

describe('9_bannerSlider', () => {
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

        const alink = cy.wrap(item).find('a').should(($alinks) => {
            expect($alinks).to.have.attr('href').eq('http://www.prestashop.com/?utm_source=v16_homeslider')
        })

          // check if the images contains the right name
          const img = cy.wrap(item, {timeout: 10000}).find('img').should(($images) => {
            expect($images).to.have.attr('src').contains(banner[index])
          })

          //check if the images using the right size
          const height = cy.wrap(item).find('img').should(($imgheight) => {
              expect($imgheight).to.have.attr('height').eq('448')
          })
          const width = cy.wrap(item).find('img').should(($imgwidth) => {
            expect($imgwidth).to.have.attr('width').eq('779')
        })
        })
    })

    it('Should not change picture on hover', () => {
        
    })
})  
