import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open Facebook login page', () => {
  cy.visit('https://practicetestautomation.com/practice-test-login/');
});

When('I enter username {string}', (username) => {
  cy.get('#email').type(username);
});

When('I enter password {string}', (password) => {
  cy.get('#password').type(password);
});

When('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should be logged in successfully', () => {
  cy.url().should('not.include', 'login');
  cy.get('[aria-label="Account"]').should('exist'); // Adjust if necessary
});

Then('I should see an error message', () => {
  cy.get('div[role="alert"]').should('exist');
});
