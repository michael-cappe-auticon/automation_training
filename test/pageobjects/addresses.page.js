import Page from './page';
import utl   from '../../utilities/common-utilities';

class AddressesPage extends Page {

    /**
    * define elements
    */

    get addressesLink()    { return $('//div[@class="footer-block my-account"]//a[text()="Addresses"]');}
    get addNewButton()     { return $('//input[@type="button" and @value="Add new"]');}

    get firstNameInput()   { return $('//input[@id="Address_FirstName"]'); }
    get lastNameInput()    { return $('//input[@id="Address_LastName"]'); }
    get emailInput()       { return $('//input[@id="Address_Email"]'); }

    get countrySelect()    { return $('//select[@id="Address_CountryId"]'); }
    get stateSelect()      { return $('//select[@id="Address_StateProvinceId"]'); }
    
    get cityInput()        { return $('//input[@id="Address_City"]'); }
    get addressInput()     { return $('//input[@id="Address_Address1"]'); }
    get zipInput()         { return $('//input[@id="Address_ZipPostalCode"]'); }

    get phoneInput()       { return $('//input[@id="Address_PhoneNumber"]'); }
    
    get saveButton()       { return $('//input[@type="submit" and @value="Save"]'); }

    verifyName(name)       { return $('//div[@class="section address-item"]//li[text()="'+name+'"]'); }

    deleteButton(name)     { return $('//div[@class="title" and .="'+name+'"]//following-sibling::div[@class="buttons"]//input[@type="button" and @value="Delete"]')}
   
    /**
     * your page specific methods
     */

    gotoAddressesPage()
    {
      this.addressesLink.click();
    }

    clickAddNewButton()
    {
      this.addNewButton.click();
    }

    inputName (firstName, lastName) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
    }

    inputEmail (email) {
        this.emailInput.setValue(email);
    }

    inputCountryAndState (country, state) {
        this.countrySelect.selectByVisibleText(country);
        browser.pause(250);
        this.stateSelect.selectByVisibleText(state);
    }

    inputAddress (city, address, zip) {
        this.cityInput.setValue(city);
        this.addressInput.setValue(address);
        this.zipInput.setValue(zip);
    }

    inputPhone (phone) {
        this.phoneInput.setValue(phone);
    }

    saveAddress() {
        this.saveButton.click();
    }

    verifyAddressAdded(name) {
        return this.verifyName(name).isDisplayed();
    }

    deleteAddress(name) {
        this.deleteButton(name).click();
        browser.acceptAlert();
        browser.pause(500);
    }
}

export default new AddressesPage()
