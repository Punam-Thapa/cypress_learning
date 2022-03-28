/// <reference types="Cypress" />
describe("test mouse actions ", () => {
    it("scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();



    })
    it("I should be able to drag and drop the items", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        

    })
    it("I should be able to double click the items", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
       cy.get('#double-click').dblclick();
        

    })
    it.only("I should be able to hold down left mouse click button on given the items", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
       cy.get('#click-box').trigger('mousedown',{which:1}).then(($element)=>{
           expect($element).to.have.css('background-color','rgb(0, 255, 0)')
       
        });

        

    })



}) 