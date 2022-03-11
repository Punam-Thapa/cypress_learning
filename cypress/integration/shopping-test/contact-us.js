/// <reference types="Cypress" />
describe("Test Contact Us for shopping website", () => {
    it("Should be able to navigate to contact page", () => {
        cy.visit('https://automationteststore.com/');
        
        //withnoxpath

        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        //input[contains(@id,'ContactUsFrm_first_name')]
        // cy.get('#ContactUsFrm_first_name').type("Anushka");
        // cy.get('#ContactUsFrm_email').type("Sharma@gmail.com");
        // cy.get('#ContactUsFrm_enquiry').type("everything good...");
        // cy.get('.col-md-6 > .btn').click();

        //usingxpath

        // cy.xpath(' //a[contains(@href,"contact")]').click();

        // cy.xpath('//input[contains(@id,"ContactUsFrm_first_name")]').type('anushka');

        // cy.xpath('//input[contains(@id,"ContactUsFrm_email")]').type('anuskha@gmail.com');

        // cy.xpath('//textarea[contains(@id,"ContactUsFrm_enquiry")]').type("hellllllloooooo");

        // cy.xpath('//button[contains(@class,"btn btn-primary lock-on-click")]').click();

        //using dyanamic paths
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Anushka");
        cy.get('#ContactUsFrm_email').type("Sharma@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("everything good...");
        cy.get("button[title='Submit']").click();








    });

    it("for invalid email", () => {
        cy.visit('https://automationteststore.com/');
        //noxpath
        //     cy.get('.info_links_footer > :nth-child(5) > a').click();
        //     cy.get('#ContactUsFrm_first_name').type("Anushka");
        //     cy.get('#ContactUsFrm_email').type("a");
        //     cy.get('#ContactUsFrm_enquiry').type("everything good...");
        //     cy.get('.col-md-6 > .btn').click();










    });
    it("to reset the contact details", () => {
        cy.visit('https://automationteststore.com/');
        //no xpath
        //     cy.get('.info_links_footer > :nth-child(5) > a').click();
        //     cy.get('#ContactUsFrm_first_name').type("Anushka");
        //     cy.get('#ContactUsFrm_email').type("a");
        //     cy.get('#ContactUsFrm_enquiry').type("everything good...");
        //     cy.get('.col-md-1 > .btn').click();

        //using xpath
        cy.xpath(' //a[contains(@href,"contact")]').click();

        cy.xpath('//input[contains(@id,"ContactUsFrm_first_name")]').type('anushka');

        cy.xpath('//input[contains(@id,"ContactUsFrm_email")]').type('anuskha@gmail.com');

        cy.xpath('//textarea[contains(@id,"ContactUsFrm_enquiry")]').type("hellllllloooooo");
        cy.xpath('//button[contains(@class,"btn btn-default pull-left")]').click();







    });


})