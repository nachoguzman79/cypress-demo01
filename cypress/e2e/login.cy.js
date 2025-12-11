describe('Login Flow - Saucedemo', () => {

  // This runs before each test
  beforeEach(() => {
    // Clear cookies and local storage to ensure tests start fresh
    cy.clearCookies();
    cy.clearLocalStorage();

    // Visit the login page
    cy.visit('https://www.saucedemo.com/');
  });

  it('Successful login with valid credentials', () => {
    // Enter valid username and password
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('secret_sauce');

    // Click the login button
    cy.get('#login-button').click();

    // Verify redirection to inventory page
    cy.url().should('include', '/inventory.html');

    // Verify that the products page is displayed
    cy.get('.title').should('contain', 'Products');

    // Optional: Logout after login
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    // Verify that we are back on the login page
    cy.url().should('include', '/');
  });

  it('Displays error with invalid credentials', () => {
    // Enter invalid username and password
    cy.get('#user-name').clear().type('invalid_user');
    cy.get('#password').clear().type('123');

    // Click login
    cy.get('#login-button').click();

    // Verify that the error message is displayed
    cy.get('[data-test="error"]')
      .should('contain', 'Username and password do not match any user in this service');
  });

});
