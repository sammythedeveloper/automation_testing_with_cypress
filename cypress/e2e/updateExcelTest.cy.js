describe('Update specific Excel cell', () => {
    it('updates Zelalem\'s Salary to 4000', () => {
      const filePath = 'cypress/fixtures/data/employeeUpdate.xlsx';
      const sheetName = 'Sheet1';
      const cellAddress = 'D2';
      const newValue = 4000;
  
      cy.task('updateExcelCell', {
        filePath,
        sheetName,
        cellAddress,
        newValue
      }).then(() => {
        cy.log('Cell D2 updated successfully!');
        console.log(`✅ Updated ${cellAddress} in ${sheetName} with value ${newValue}`);
      });
    });
  });
  