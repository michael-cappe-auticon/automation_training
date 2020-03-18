import { Then } from 'cucumber';
import productsListPage from '../pageobjects/products-list.page';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import productPage from '../pageobjects/product.page';
import shoppingCartPage from '../pageobjects/shopping-cart.page';
import addressesPage from '../pageobjects/addresses.page';
import checkoutPage from '../pageobjects/checkout.page';

Then('I should see a product list', function () {
  productsListPage.hasProductsList().should.be.true;
});

Then(/^I should see "([^"]*)" in the product list$/, function (text) {
  productsListPage.isProductInList(text).should.be.true;
});

Then(/^I should see "([^"]*)" as the list title$/, function (text) {
  productsListPage.getListTitle().should.equal(text);
});

Then('I should see the logout link', function () {
  loginPage.isLogoutShowing().should.be.true;
});

Then('Registration should be complete', function () {
  registerPage.isCompleted().should.be.true;
});

Then('I should see a product page', function () {
  productPage.isPageLoaded().should.be.true;
});

Then('I should see the shopping cart page', function () {
  shoppingCartPage.isPageLoaded().should.be.true;
});

Then(/^I should see "([^"]*)" in the shopping cart$/, function (text) {
  shoppingCartPage.isProductInCart(text).should.be.true;
});

Then(/^I should not see "([^"]*)" in the shopping cart$/, function (text) {
  shoppingCartPage.isProductInCart(text).should.be.false;
});

Then(/^I should see "([^"]*)" in the address list$/, function (text) {
  addressesPage.verifyAddressAdded(text).should.be.true;
});

Then(/^I should not see "([^"]*)" in the address list$/, function (text) {
  addressesPage.verifyAddressAdded(text).should.be.false;
});

Then('I should see the order completed screen', function () {
  checkoutPage.isOrderCompleted().should.be.true;
});
