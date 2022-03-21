/// <reference types="Cypress" />
describe("alias and invoke", () => {


    it("validate the specific hair products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productname')
        cy.get('@productname').its('length').should('be.gt', 5)
        cy.get('@productname').should('include', 'Seaweed Conditioner')
    })

    it("validate the home products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
    })
    it("validate cart title", () => {
        cy.visit('https://automationteststore.com/');

        cy.get('.productcart').invoke('attr', 'title').as('productTitle');
        cy.get('@productTitle').should('include', 'Add to Cart')

    })
    it.only("calculate total of normal and sale products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        //only for sale items
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        //     });

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPriceSale')
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);

            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total :" + itemsPriceTotal);
        })
        cy.get('@itemPriceSale').then($linkText => {
            var saleItemPrice = $linkText.split('$');
            var salePriceTotal= 0;
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i]);
                salePriceTotal +=  Number(saleItemPrice[i]);
               }
               itemsTotal += salePriceTotal;
               cy.log("sale items price total:"+salePriceTotal)   
        })
        .then(()=>{
            cy.log("the total price of all products is:"+ itemsTotal)
            expect(itemsTotal).to.equal(648.5)
        })
    

    })


})


