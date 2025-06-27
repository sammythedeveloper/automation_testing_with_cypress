describe('Write Data to Excel', () => {
    it('writes employee data to employeeData.xlsx', () => {
      const employeeData = [
        { EmployeeID: 101, Name: "Alice", Department: "HR", Salary: 60000 },
        { EmployeeID: 102, Name: "Bob", Department: "IT", Salary: 75000 },
        { EmployeeID: 103, Name: "Charlie", Department: "Finance", Salary: 65000 }
      ];
  
      cy.task('writeExcelFile', {
        data: employeeData,
        fileName: 'employeeData.xlsx',
        sheetName: 'EmployeeDetails'
      }).then(() => {
        cy.log('Excel file written successfully!');
      });
    });
  });
  