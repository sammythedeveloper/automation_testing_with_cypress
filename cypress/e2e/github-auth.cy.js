describe("Visit GitHub Login Page", () => {
  const username = Cypress.env("GITHUB_USERNAME");

  before(() => {
    cy.visit("https://github.com/login");
    cy.get("#login_field").type(username);
    cy.get("#password").type(Cypress.env("GITHUB_PASSWORD"), { log: false });
    cy.get(".position-relative > .btn").click();
  });

  it("should confirm login by checking avatar", () => {
    // Wait for redirect
    cy.url({ timeout: 10000 }).should("include", "github.com");

    // Check for the user avatar (alt="@your-username")
    cy.get(`[alt="@${username}"]`, { timeout: 10000 }).should("exist");
  });
});

//  cy.get('#login_field').type(Cypress.env('GITHUB_USERNAME'));
//  cy.get('#password')..type(Cypress.env('GITHUB_PASSWORD'), { log: false });
// cy.get('.position-relative > .btn').click();
