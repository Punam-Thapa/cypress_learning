/// <reference types="Cypress" />
describe("handle js alerts", () => {
    it("confirm js alerts contains the correct tests", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
    });

    it("validate js confirm alerst box works correctly when clicking alert", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
            return true; //return ture means it click on ok
           
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
       



});
    it("validate js confirm alerst box works correctly when clicking alert", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
          
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
});
it.only("validate with stubs", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    const stub= cy.stub()
    cy.on('window:confirm', stub)
    cy.get('#button4').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(()=>{
        return true;

    }).then(()=>{
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })
   
});
})