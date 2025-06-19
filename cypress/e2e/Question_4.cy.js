import LoginPage from '../support/LoginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('should login successfully with valid credentials', () => {
        loginPage.login('practice', 'SuperSecretPassword!');

        // Verify login success by URL or dashboard element
        cy.url().should('not.include', '/login');
        cy.contains('Dashboard').should('be.visible');
    });
});
