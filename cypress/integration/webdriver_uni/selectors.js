/// <reference types="Cypress" />
describe("Selectors example", () => {
    it("examples of selectors", () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //by tag name
        cy.get("input")

        //by attribute name and value
        cy.get("input[name='first_name]")

        //by id
        cy.get("#contact_me")

        //by classs
        cy.get(".feedback-input")

        //by multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top]")

        //by two different attributes
        cy.get("[name='email][placeholder='Email Address']")

        //by xpath
        cy.xpath("//input[@name='first_name']")

        

    })

})
