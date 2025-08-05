import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
import menuPage from "../../../support/pages/menu.page.js";
const login = require('../../../fixtures/login.json');

describe('Authentication Suites', () => {

  describe('Positive Case Login and Logout', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.url().should('include', 'saucedemo');
      cy.login();

    });

    it('Verify Success to Login and Logout with Valid Credentials', () => {
      inventoryPage.verifyInventoryUrl();
      inventoryPage.verifyInventoryTitle();
      inventoryPage.verifyBurgerMenuIsDisplayed();
      cy.logout();
      loginPage.verifyLoginUrl();
    });

   });

});
