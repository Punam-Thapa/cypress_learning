/// <reference types="Cypress" />
describe("verifying variables,cypress comands and jquery commands", () => {

// it("navigating to specific products pages", () => {
//     cy.visit('https://automationteststore.com/');

//        //will fail the test 
//         // const makeupLink= cy.get("a[href*='product/category&path=']").contains('Makeup')
//         // const skincareLink= cy.get("a[href*='product/category&path=']").contains('Skincare')
//         // makeupLink.click();
//         // skincareLink.click();
        
//         //pass the test
//         // const makeupLink= cy.get("a[href*='product/category&path=']").contains('Makeup')
//         // makeupLink.click();
//         // const skincareLink= cy.get("a[href*='product/category&path=']").contains('Skincare')
//         // skincareLink.click();
   
//         //recommended approach
//         cy.get("a[href*='product/category&path=']").contains('Makeup').click();
//         cy.get("a[href*='product/category&path=']").contains('Skincare').click();

        

    
    
//     });

//     it("navigating to specific products pages", () => {
//         cy.visit('https://automationteststore.com/');
//         cy.get("a[href*='product/category&path=']").contains('Makeup').click();
//         // const header= cy.get("h1.maintext");
//         // console.log(header.text());

//         cy.get("h1 .maintext").then(($headerText)=>{
//             const headerText= $headerText.text()
//             cy.log("found header text:"+ headerText)
//             expect(headerText).is.eq('Makeup')
//         });


        it.only("contact pages", () => 
        {
            cy.visit('https://automationteststore.com/index.php?rt=content/contact');
            
            //uses cypress commands chaining
            //cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

            //jquery approach
            cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
                const firstNameText= text.find('#field_11').text()
                expect(firstNameText).contains('First name')

                //embedded commands
                cy.get('#field_11').then(fnText=>{
                    cy.log(fnText.text())
                    cy.log(fnText)

                })
            })
            //embedded commands(closure)
          
            
            
    
            
    
        
        
        });
    
})