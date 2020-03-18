import { Given} from 'cucumber';
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';

Given('I am on the home page', function () {
  homePage.open();
  browser.getTitle().should.equal('Your store');
});

Given('I am on the login page', function () {
  loginPage.open();
  browser.getTitle().should.equal('Your store. Login');
});

Given('I am on the register page', function () {
  registerPage.open();
  browser.getTitle().should.equal('Your store. Register');
});

Given(/^I am logged in as email and password "([^"]*)" "([^"]*)"$/, function (arg1, arg2) {
  loginPage.gotoLoginScreen();
  loginPage.login(arg1, arg2);
});