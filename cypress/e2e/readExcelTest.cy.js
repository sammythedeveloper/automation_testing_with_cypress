// describe('Read Excel Data', () => {
//   it('logs each row from Excel', () => {
//     cy.readExcel().then((rows) => {
//       rows.forEach((row, index) => {
//         cy.log(`Row ${index + 1}: Username - ${row.username}, Password - ${row.password}`);
//         console.log(`Row ${index + 1}:`, row);
//       });
//     });
//   });
// });

describe('Read Excel Data', () => {
  it('logs each row from Excel', () => {
    cy.readExcel().then((rows) => {
      cy.wrap(rows).each((row, index) =>  {
        cy.log(`Row ${index + 1}: Username - ${row.username}, Password - ${row.password}`);
        console.log(`Row ${index + 1}:`, row);
      });
    });
  });
});

// Cypress UI cy.log() only shows string output you explicitly pass.
// so wee add this line of code  cy.wrap(rows).each((row, index) =>  
// If you do cy.log(row), it tries to convert an object to string, which can become undefined or [object Object].