/// <reference types="Cypress" />
describe("Interact with dropdown lists ", () => {
    it("select specific values via dropdown list ", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#dropdowm-menu-1').select('C#');
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven'); //based on value
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS'); //based on text

        
    })
   


})