describe("popular we application", () => {
    it.only("Google Visit", () => {
        //write command here
        cy.visit("https://google.com")
        cy.get("#APjFqb").type("Automaion testing")
        cy.get('.FPdoLc > center > .gNO89b').click()
      
    })
    it("Facebook visit", () => {
        //
        cy.visit("https://facebook.com")
    })
    it("Evangadi Network Visit", () => {
        //
        cy.visit("https://evangadi.com")
    })
})