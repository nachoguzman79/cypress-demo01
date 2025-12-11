const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('Login Tests - Saucedemo (POM Version)', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Should successfully login with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    InventoryPage.assertLoggedIn();
  });

  it('Should display an error with invalid credentials', () => {
    LoginPage.login('wrong_user', 'wrong_password');
    LoginPage.assertError('Username and password do not match');
  });

  it('Should logout after successful login', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    InventoryPage.assertLoggedIn();
    InventoryPage.logout();
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });

});
