import loginPage from "../../../support/pages/login.page.js";
import inventoryPage from "../../../support/pages/inventory.page.js";
import cartPage from "../../../support/pages/cart.page.js";
const login = require('../../../fixtures/login.json');

describe('Cart Suite', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.login();
  })

  it('Verify Success Display Cart Page with Click on Cart Icon and product is displayed and can remove ', () => {

    inventoryPage.clickAddToCart();
    inventoryPage.clickCartIcon();
    cartPage.verifyProductListIsDisplayed();
    cartPage.clickRemoveButton();

  });

  afterEach(() => {
    cy.clearCookies();
  })

});