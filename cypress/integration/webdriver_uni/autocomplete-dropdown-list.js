/// <reference types="Cypress" />
describe("verify autocomplete dropdown lists ", () => {
    it("select specific products via autocomplete dropdown list ", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list> *').each(($el,index,$list)=>{
            const prod = $el.text();
            const productToSelect = 'Almond';

           if(prod === productToSelect){
            //    $el.click();
               $el.trigger("click");
               cy.get('#submit-button').click();
               cy.url().should("include", productToSelect)
           }
        }).then(()=>{
            cy.get('#myInput').type('G');
        cy.get('#myInputautocomplete-list> *').each(($el,index,$list)=>{
            const prod = $el.text();
            const productToSelect = 'Grapes';

           if(prod === productToSelect){
               //$el.click();
               $el.trigger("click");
               cy.get('#submit-button').click();
               cy.url().should("include", productToSelect)
           }
        })

        })
        

        
    })
   


}) 