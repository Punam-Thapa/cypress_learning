/// <reference types="Cypress" />
describe("alias and invoke", () => {
   

    it("validate the specific hair products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productname')
        cy.get('@productname').its('length').should('be.gt', 5)
        cy.get('@productname').should('include','Seaweed Conditioner')
        })

        it("validate the home products",()=>{
            cy.visit('https://automationteststore.com/');
            cy.get('.thumbnail').as('productThumbnail');
            cy.get('@productThumbnail').should('have.length',16);
    })
    it("validate cart title",()=>{
        cy.visit('https://automationteststore.com/');
        
        cy.get('.productcart').invoke('attr','title').as('productTitle');
        cy.get('@productTitle').should('include','Add to Cart')

    })
    // it.only("validate cart title",()=>{
    //     cy.visit('https://automationteststore.com/');
    //     cy.get('.pricetag').find('.oneprice').each(($el, index, $list) => {
    //         cy.log("Index:" + index + " : " + $el.text())
    //     }
    // })
    
    
})
