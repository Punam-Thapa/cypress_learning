/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to login", () => {
        //cypress code
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#contact-us').click()
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Punam')
        cy.get('[name="last_name"]').type('Thapa')
        cy.get('[name="email"]').type('punam@gmail.com')
        cy.get('textarea.feedback-input').type("hello,welcome")
        cy.get('[type="submit"]').click()
      






    });
    it("error message ", () => {

       
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Punam')
        cy.get('[name="last_name"]').type('Thapa')
        
        cy.get('textarea.feedback-input').type("hello,welcome")
        cy.get('[type="submit"]').click()
        


    });

})