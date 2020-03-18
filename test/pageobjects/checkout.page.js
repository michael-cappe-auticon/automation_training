import Page from './page';
import utl   from '../../utilities/common-utilities';

class CheckoutPage extends Page {

    /**
    * define elements
    */
    get continueBilling()   { return $('//div[@id="billing-buttons-container"]//input[@type="button" and @value="Continue"]');}

    get continueShipping()  { return $('//div[@id="shipping-method-buttons-container"]//input[@type="button" and @value="Continue"]');}

    get creditCardMethod()  { return $('//input[@id="paymentmethod_1"]');}
    get continuePayMethod() { return $('//div[@id="payment-method-buttons-container"]//input[@type="button" and @value="Continue"]');}

    get cardholderName()    { return $('//input[@id="CardholderName"]');}
    get cardNumber()        { return $('//input[@id="CardNumber"]');}
    get expirationMonth()   { return $('//select[@id="ExpireMonth"]');}
    get expirationYear()    { return $('//select[@id="ExpireYear"]');}
    get cardCode()          { return $('//input[@id="CardCode"]');}
    get continuePayInfo()   { return $('//div[@id="payment-info-buttons-container"]//input[@type="button" and @value="Continue"]');}
    
    get confirmOrder()      { return $('//div[@id="confirm-order-buttons-container"]//input[@type="button" and @value="Confirm"]');}

    get orderCompleted()    { return $('//div[@class="section order-completed"]');}

    /*
        //input[@type="button" and @value="Continue"and @class="button-1 order-completed-continue-button"]
    */

    /**
     * your page specific methods
     */

    clickContinueBilling() {
        this.continueBilling.waitForClickable(10000);
        this.continueBilling.click();
    }

    clickContinueShipping() {
        this.continueShipping.waitForClickable(10000);
        this.continueShipping.click();
    }

    selectCreditCardMethod() {
        this.creditCardMethod.waitForClickable(10000);
        this.creditCardMethod.click();
    }

    clickContinuePayMethod() {
        this.continuePayMethod.waitForClickable(10000);
        this.continuePayMethod.click();
    }

    inputCardDetails(name, number, month, year, code)
    {
        this.cardholderName.waitForClickable(10000);
        this.cardholderName.setValue(name);
        this.cardNumber.setValue(number);
        this.expirationMonth.selectByAttribute('value', month);
        this.expirationYear.selectByAttribute('value', year);
        this.cardCode.setValue(code);
    }

    clickContinuePayInfo() {
        this.continuePayInfo.waitForClickable(10000);
        this.continuePayInfo.click();
    }

    clickConfirmOrder() {
        this.confirmOrder.waitForClickable(10000);
        this.confirmOrder.click();
    }

    isOrderCompleted() {
        this.orderCompleted.waitForDisplayed(10000);
        return this.orderCompleted.isDisplayed();
    }
}

export default new CheckoutPage()
