describe("Practice Test Site Authentication Flow", () => {
  const username = Cypress.env("USERNAME");
  const password = Cypress.env("PASSWORD");

  before(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get('#username').type(username, { delay: 100 });
    cy.get('#password').type(password, { delay: 100 });
    cy.get('#submit').click({ delay: 300 });

    cy.wait(1000); // Wait for page transition
    cy.url().should('include', '/logged-in-successfully/');
    cy.get('.post-title').should("contain.text", "Logged In Successfully");
  });

  it("should confirm user is logged in and see protected content", () => {
    cy.wait(1000);
    cy.get('.post-content').should("contain.text", "Congratulations");
    cy.contains("Log out").should("be.visible");
  });

  after(() => {
    cy.wait(1000);
    cy.contains("Log out").click();
    cy.wait(500);
    cy.url().should("include", "/practice-test-login/");
    cy.get('#username').should('be.visible');
  });
});
