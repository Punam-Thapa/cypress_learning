class homePage_PO{
    visitHomePage()
    {
        cy.visit("http://www.webdriveruniversity.com")

    }
    contactusPage(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }

}

export default homePage_PO;