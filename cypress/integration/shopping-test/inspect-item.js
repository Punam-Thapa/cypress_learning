/// <reference types="Cypress" />
describe("Inspect the automation test store items using chain of commands", () => {
    // it("click on the first item using item header", () => {
    //     cy.visit('https://automationteststore.com/');
    //     cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        
    
    // });

    it.only("click on the first item using item text", () => {
        cy.visit('https://automationteststore.com/');
        cy.get(".prdocutname").contains('Skinsheen Bronzer Stick').click().then(function(Itemheader){
            console.log("the selected item is:"+ Itemheader.text())
        })
    
    });
    it("click on the first item using index", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(6).click();
        
    
    });
})