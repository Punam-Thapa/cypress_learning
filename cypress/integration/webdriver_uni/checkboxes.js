/// <reference types="Cypress" />
describe(" verify checkboxe", () => {
    it("check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
        //cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        
        //using alias
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')

       


    
    })
    it("uncheck and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked')


    
    })
    it.only("check multiple checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click();
        //cy.get('[type="checkbox"]').check()
        //cy.get('[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]);
        cy.get('[type="checkbox"]').as('options')
        cy.get('@options').check().should('be.checked');



    
    })

});