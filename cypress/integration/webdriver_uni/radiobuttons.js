/// <reference types="Cypress" />
describe(" verify radiobuttons", () => {
    before(function(){
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

    })
    it("check and validate radiobuttons", () => {
        
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    })
    it.only("check and validate radiobuttons", () => {
       
        // cy.get('#radio-buttons-selected-disabled').find("[type='radio']").first().should('not.be.checked')
        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="cabbage"]').should('be.disabled');
        cy.get('[value="pumpkin"]').should('be.checked');

        })


})