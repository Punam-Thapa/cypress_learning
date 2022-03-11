/// <reference types="Cypress" />
describe("Test Contact Us for shopping website", () => {
    it("Should be able to navigate to contact page", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Anushka");
        cy.get('#ContactUsFrm_email').type("Sharma@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("everything good...");
        cy.get('.col-md-6 > .btn').click();

    






    });

    it("for invalid email", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Anushka");
        cy.get('#ContactUsFrm_email').type("a");
        cy.get('#ContactUsFrm_enquiry').type("everything good...");
        cy.get('.col-md-6 > .btn').click();

    






    });
    it.only("to reset the contact details", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Anushka");
        cy.get('#ContactUsFrm_email').type("a");
        cy.get('#ContactUsFrm_enquiry').type("everything good...");
        cy.get('.col-md-1 > .btn').click();

    






    });


})