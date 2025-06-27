const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const path = require("path");
const fs = require('fs-extra');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {

        readExcelFile() {
          const filePath = path.resolve("cypress/fixtures/data/testdata.xlsx");
          const workbook = xlsx.readFile(filePath);

          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

          // 👇 Add this: explicitly parse rows including header row
          const rows = xlsx.utils.sheet_to_json(worksheet, { defval: "" });

          console.log("Parsed Excel Rows:", rows); // Optional debug
          return rows;
        },
        writeExcelFile({ data, fileName, sheetName }) {
          // Create a new workbook and worksheet from JSON data
          const wb = xlsx.utils.book_new();
          const ws = xlsx.utils.json_to_sheet(data);

          // Append worksheet to workbook
          xlsx.utils.book_append_sheet(wb, ws, sheetName);
          // Resolve output file path in the project root or custom folder
          const outputPath = path.resolve(`cypress/fixtures/${fileName}`);
          // Write workbook to file
          xlsx.writeFile(wb, outputPath);
          return null; // tasks must return something (null if no result)
        },
        updateExcelCell({ filePath, sheetName, cellAddress, newValue }) {
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];

          if (!worksheet[cellAddress]) {
            worksheet[cellAddress] = {}; // create cell if it doesn't exist
          }

          worksheet[cellAddress].v = newValue;

          xlsx.writeFile(workbook, filePath);
          return null;
        },
        readMultipleSheets({ filePath }) {
          const fullPath = path.resolve(filePath);
          const workbook = xlsx.readFile(fullPath);
          const result = {};
      
          workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(worksheet, { defval: '' });
            result[sheetName] = data;
          });
      
          return result; // returns all sheets as JSON
        },
        readLoginData() {
          const filePath = path.resolve('cypress/fixtures/data/loginTestData.xlsx');
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const data = xlsx.utils.sheet_to_json(worksheet, { defval: '' });
          
          console.log('Raw Excel Data:', data);  // <-- Add this line
          return data;
        },
        updateLoginStatus({ rowIndex, status }) {
          console.log(`Updating row ${rowIndex} with status: ${status}`);
          try {
            const filePath = path.resolve('cypress/fixtures/data/loginTestData.xlsx');
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
        
            if (!worksheet) throw new Error(`Sheet ${sheetName} not found`);
        
            const cellAddress = `C${rowIndex + 2}`;
            worksheet[cellAddress] = { t: 's', v: status };
        
            xlsx.writeFile(workbook, filePath);
            return null;
          } catch (error) {
            console.error('Error updating login status:', error);
            throw error;
          }
        }   
        // updateLoginStatus({ rowIndex, status }) {
        //   console.log(`Updating row ${rowIndex} with status: ${status}`);
        //   const filePath = path.resolve('cypress/fixtures/data/loginTestData.xlsx');
        //   const newFilePath = path.resolve('cypress/fixtures/data/loginTestData_updated.xlsx');
        
        //   const workbook = xlsx.readFile(filePath);
        //   const sheetName = workbook.SheetNames[0];
        //   const worksheet = workbook.Sheets[sheetName];
        
        //   const cellAddress = `C${rowIndex + 2}`;
        //   worksheet[cellAddress] = { t: 's', v: status };
        
        //   xlsx.writeFile(workbook, newFilePath);
        //   console.log(`Wrote update to ${newFilePath}`);
        //   return null;
        // }
        
      });
    },
  },
});


// #6
// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
// const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/features/*.feature',
//     stepDefinitionPattern: 'cypress/e2e/step_definitions/*.js', // <- this matters

//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config);

//       on('file:preprocessor', createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));

//       return config;
//     },
//   },
// });




