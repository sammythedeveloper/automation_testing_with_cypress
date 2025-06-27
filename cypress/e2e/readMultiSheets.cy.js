describe('Read Multiple Sheets from Excel', () => {
    it('displays data from all sheets', () => {
      const filePath = 'cypress/fixtures/data/multiSheetData.xlsx';
  
      cy.readExcelSheets(filePath).then((sheetsData) => {
        Object.keys(sheetsData).forEach(sheetName => {
          cy.log(`Sheet: ${sheetName}`);
          sheetsData[sheetName].forEach((row, index) => {
            cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
            console.log(`Sheet: ${sheetName} | Row ${index + 1}`, row); // for DevTools/terminal
          });
        });
      });
    });
  });
  