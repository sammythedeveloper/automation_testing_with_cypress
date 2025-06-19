class LoginPage {
    visit() {
      cy.visit('https://practice.expandtesting.com/login');
    }
  
    enterUsername(username) {
      cy.get('#username').clear().type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').clear().type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    login(username, password) {
      this.visit();
      this.enterUsername(username);
      this.enterPassword(password);
      this.submit();
    }
  }
  
  export default LoginPage;
  