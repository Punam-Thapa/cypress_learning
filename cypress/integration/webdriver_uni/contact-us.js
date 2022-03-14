/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to login", () => {
        //cypress code
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#contact-us').click()
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.document().should('have.property','charset').and('eq','UTF-8 ')
        cy.document().should('have.a.property','charset').and('eq','UTF-8')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')

        cy.get('[name="first_name"]').type('Punam')
        cy.get('[name="first_name"]').should('have.class','feedback-input')
        cy.get('[name="last_name"]').type('Thapa')
        cy.get('[name="last_name"]').should('have.class','feedback-input')
        cy.get('[name="email"]').type('punam@gmail.com')
        cy.get('textarea.feedback-input').type("hello,welcome")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
      






    });
    it("error message ", () => {

       
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Punam')
        cy.get('[name="last_name"]').type('Thapa')
        
        cy.get('textarea.feedback-input').type("hello,welcome")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required');
        


    });

})