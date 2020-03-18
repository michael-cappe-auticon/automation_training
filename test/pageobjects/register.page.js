import Page from './page';
import utl   from '../../utilities/common-utilities';

class RegisterPage extends Page {

    /**
    * define elements
    */

    get genderMaleInput()      { return $('//input[@id="gender-male"]'); }
    get genderFemaleInput()    { return $('//input[@id="gender-female"]'); }
    get firstNameInput()       { return $('//input[@id="FirstName"]'); }
    get lastNameInput()        { return $('//input[@id="LastName"]'); }
    get dobDaySelect()         { return $('//select[@name="DateOfBirthDay"]'); }
    get dobMonthSelect()       { return $('//select[@name="DateOfBirthMonth"]'); }
    get dobYearSelect()        { return $('//select[@name="DateOfBirthYear"]'); }
    get emailInput()           { return $('//input[@id="Email"]'); }

    get companyNameInput()     { return $('//input[@id="Company"]'); }

    get newsletterInput()      { return $('//input[@id="Newsletter"]'); }
    
    get passwordInput()        { return $('//input[@id="Password"]'); }
    get confirmPasswordInput() { return $('//input[@id="ConfirmPassword"]'); }
    
    get registerButton()       { return $('//input[@id="register-button"]'); }

    get registerCompleted()    { return $('//div[@class="result" and text()="Your registration completed"]'); }
   
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('register')       //this will append `register` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    inputName (firstName, lastName) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
    }

    inputDob (month, day, year) {
        this.dobDaySelect.selectByAttribute('value', day);
        this.dobMonthSelect.selectByAttribute('value', month);
        this.dobYearSelect.selectByAttribute('value', year);
    }

    inputEmail (email) {
        this.emailInput.setValue(email);
    }

    inputPassword (password) {
        this.passwordInput.setValue(password);
        this.confirmPasswordInput.setValue(password);
    }

    submitRegister() {
        this.registerButton.click();
    }

    isCompleted() {
        this.registerCompleted.waitForDisplayed(3000);
        return this.registerCompleted.isDisplayed();
    }
}

export default new RegisterPage()
