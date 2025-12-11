class InventoryPage {

  elements = {
    title: () => cy.get('.title'),
    menuButton: () => cy.get('#react-burger-menu-btn'),
    logoutButton: () => cy.get('#logout_sidebar_link')
  }

  assertLoggedIn() {
    cy.url().should('include', '/inventory.html');
    this.elements.title().should('contain', 'Products');
  }

  logout() {
    this.elements.menuButton().click();
    this.elements.logoutButton().click();
  }
}

module.exports = new InventoryPage();
