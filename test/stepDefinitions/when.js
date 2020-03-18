import {Given, When, Then} from 'cucumber';
import utl   from '../../utilities/common-utilities';
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import productsListPage from '../pageobjects/products-list.page';
import productPage from '../pageobjects/product.page';
import shoppingCartPage from '../pageobjects/shopping-cart.page';
import addressesPage from '../pageobjects/addresses.page';
import checkoutPage from '../pageobjects/checkout.page';

// Home Page
When(/^I enter "([^"]*)" into the search box$/, function (arg1) {
    homePage.enterSearchText(arg1);
    homePage.searchInput.getValue().should.equal(arg1);
});

When(/^I click the search button$/, function () {
    homePage.search();
});

When(/^I hover over "([^"]*)" in the category menu$/, function (arg1) {
    homePage.hoverCategory(arg1);
});

When(/^I select "([^"]*)" in the category menu$/, function (arg1) {
    homePage.selectCategory(arg1);
});

When(/^I navigate to the Shopping Cart$/, function () {
    homePage.gotoShoppingCart();
});

// Login Page
When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering email, password and and submiting the page
});

//Register Page
When(/^I register with first and last name "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    registerPage.inputName(arg1, arg2);
});

When(/^I register with date of birth (\d{1,2})\/(\d{1,2})\/(\d{4}) into the dropdown menus$/, function (month, day, year) {
    registerPage.inputDob(month, day, year);
});

When(/^I register with email "([^"]*)" into the text box$/, function (arg1) {
    registerPage.inputEmail(arg1);
});

When(/^I register with a unique email into the text box$/, function () {
    var email = utl.generateUniqueEmail("test");
    console.log(email);
    registerPage.inputEmail(email);
});

When(/^I register with password "([^"]*)" into the text box$/, function (arg1) {
    registerPage.inputPassword(arg1);
});

When(/^I press the Register button$/, function () {
    registerPage.submitRegister();
});

// Products List Page
When(/^I select "([^"]*)" in the product list$/, function (arg1) {
    productsListPage.selectProductInList(arg1);
});

When(/^I add "([^"]*)" to the cart from the product list$/, function (arg1) {
    productsListPage.addProductToCart(arg1);
});

// Product Page
When(/^I press the Add To Cart button on the product page$/, function () {
    productPage.addToCart();
});

// Shopping Cart Page
When(/^I remove item "([^"]*)" from the Shopping Cart$/, function (arg1) {
    shoppingCartPage.removeItemFromCart(arg1);
});

When(/^I accept terms of service on the Shopping Cart$/, function () {
    shoppingCartPage.acceptTermsofService();
});

When(/^I click checkout on the Shopping Cart$/, function () {
    shoppingCartPage.clickCheckout();
    browser.pause(3000);
});

// Addresses Page
When('I click the Addresses link', function () {
    addressesPage.gotoAddressesPage();
    // browser.pause(3000);
});

When('I click the Add New Address Button', function () {
    addressesPage.clickAddNewButton();
    // browser.pause(3000);
});

When(/^I input first and last name "([^"]*)" "([^"]*)" into the address$/, function (arg1, arg2) {
    addressesPage.inputName(arg1, arg2);
});

When(/^I input email "([^"]*)" into the address$/, function (arg1) {
    addressesPage.inputEmail(arg1);
});

When(/^I input country and state "([^"]*)" "([^"]*)" into the address$/, function (arg1, arg2) {
    addressesPage.inputCountryAndState(arg1, arg2);
});

When(/^I input city, address, and zip "([^"]*)" "([^"]*)" "([^"]*)" into the address$/, function (arg1, arg2, arg3) {
    addressesPage.inputAddress(arg1, arg2, arg3);
});

When(/^I input phone "([^"]*)" into the address$/, function (arg1) {
    addressesPage.inputPhone(arg1);
});

When(/^I press the Save Address Button$/, function () {
    addressesPage.saveAddress();
});

When(/^I delete address with name "([^"]*)"$/, function (arg1) {
    addressesPage.deleteAddress(arg1);
});

When(/^I click Continue in the Billing address section of checkout$/, function () {
    checkoutPage.clickContinueBilling();
});

When(/^I click Continue in the Shipping method section of checkout$/, function () {
    checkoutPage.clickContinueShipping();
});

When(/^I select payment method "Credit Card" in checkout$/, function () {
    checkoutPage.selectCreditCardMethod();
});

When(/^I click Continue in the Payment method section of checkout$/, function () {
    checkoutPage.clickContinuePayMethod();
});

When(/^I input card name, number, expiration, and code "([^"]*)" (\d{16}) (\d{1,2})\/(\d{4}) (\d{3}) into checkout$/, function (name, number, month, year, code) {
    checkoutPage.inputCardDetails(name, number, month, year, code);
});

When(/^I click Continue in the Payment information section of checkout$/, function () {
    checkoutPage.clickContinuePayInfo();
});

When(/^I click Confirm in the Confirm order section of checkout$/, function () {
    checkoutPage.clickConfirmOrder();
});