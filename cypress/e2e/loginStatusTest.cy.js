describe('Login Test from Excel Data and Update Status', () => {
    it('reads credentials, tests login, and updates status', () => {
      cy.readLoginData().then((users) => {
        users.forEach((user, index) => {
          const username = user.username || '';
          const password = user.password || '';
      
          console.log(`Username: ${username}, Password: ${password}`); // Debug
          const isValid = username && password && password.includes('@');
          const status = isValid ? 'passed' : 'failed';
      
          cy.log(`Testing user ${username}: ${status}`);
      
          cy.updateLoginStatus(index, status);
        });
      });      

    });
  });
  