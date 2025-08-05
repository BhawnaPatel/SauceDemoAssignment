import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
import menuPage from "../../../support/pages/menu.page.js";
const login = require('../../../fixtures/login.json');

describe('Authentication Suites', () => {

  describe('Positive Case Login and Logout', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.url().should('include', 'saucedemo');

    });

    it('Verify Success to Login and Logout with Valid Credentials', () => {
      loginPage.inputUsername(login.username);
      loginPage.inputPassword(login.password);
      loginPage.clickLoginButton();
      inventoryPage.verifyInventoryUrl();
      inventoryPage.verifyInventoryTitle();
      inventoryPage.verifyBurgerMenuIsDisplayed();
      menuPage.clickOpenMenu();
      menuPage.clickLogoutMenu();
      loginPage.verifyLoginUrl();
    });

   });

});
