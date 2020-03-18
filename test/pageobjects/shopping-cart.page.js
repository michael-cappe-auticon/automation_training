import Page from './page';
import utl   from '../../utilities/common-utilities';

class ShoppingCartPage extends Page {

    /**
    * define elements
    */
    cartItem(item)         { return $('//table[@class="cart"]//a[@class="product-name" and contains(.,"'+item+'")]')}
    get orderSummary()     { return $('//div[@class="order-summary-content"]');}
    removeCheckbox(item)   { return $('//td[@class="product" and contains(.,"'+item+'")]//preceding-sibling::td[@class="remove-from-cart"]//input[contains(@id,"removefromcart")]');}
    get updateCartButton() { return $('//input[@name="updatecart"]');}
    get termsOfService()   { return $('//input[@id="termsofservice"]');}
    get checkoutButton()   { return $('//button[@id="checkout"]');}

    /**
     * your page specific methods
     */

    isProductInCart(containsText) {
        return this.cartItem(containsText).isDisplayed();
    }

    isPageLoaded() {
        this.orderSummary.waitForDisplayed(3000);
        return this.orderSummary.isDisplayed();
    }

    removeItemFromCart(containsText) {
        this.removeCheckbox(containsText).click();
        this.updateCartButton.click();
    }

    acceptTermsofService()
    {
        this.termsOfService.click();
    }

    clickCheckout()
    {
        this.checkoutButton.click();
    }
}

export default new ShoppingCartPage()
