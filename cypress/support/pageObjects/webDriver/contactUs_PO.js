class contactUs_PO{
    // contactUs(){
    //     cy.get('[name="first_name"]').type(data.first_name);
    //     cy.get('[name="last_name"]').type(data.last_name);
    //     cy.get('[name="email"]').type(data.email)
    //     cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    //     cy.get('[type="submit"]').click();
    //     cy.get('h1').should('have.text', 'Thank You for your Message!')
    // }

    webdriveruni(firtsName,lastName,email,comment,$selector,textToLocate){
        cy.get('[name="first_name"]').type(firtsName);
            cy.get('[name="last_name"]').type(lastName);
            cy.get('[name="email"]').type(email)
            cy.get('textarea.feedback-input').type(comment)
            cy.get('[type="submit"]').click();
            cy.get($selector).contains(textToLocate)
        }
    

}
export default contactUs_PO;