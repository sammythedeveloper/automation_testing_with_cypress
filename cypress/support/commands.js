// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import 'cypress-file-upload';
Cypress.Commands.add('readExcel', () => {
    return cy.task('readExcelFile');
});
  
  // custom command #4
  Cypress.Commands.add('readExcelSheets', (filePath) => {
    return cy.task('readMultipleSheets', { filePath });
  });

  // custom command #5 for user login read & update loginstatus
  Cypress.Commands.add('readLoginData', () => {
    return cy.task('readLoginData');
  });
  
  Cypress.Commands.add('updateLoginStatus', (rowIndex, status) => {
    return cy.task('updateLoginStatus', { rowIndex, status });
  });
    