import Page from './page';
import utl   from '../../utilities/common-utilities';

class ProductPage extends Page {

    /**
    * define elements
    */
    get productImage()    { return $('//img[contains(@id,"main-product-img")]');}
    get addToCartButton() { return $('//input[contains(@id,"add-to-cart-button")]');}
    get closeNotificationBar() { return $('//div[@class="bar-notification success"]//span[@class="close"]');}

    /**
     * your page specific methods
     */

    isPageLoaded()
    {
        this.productImage.waitForDisplayed(3000);
        return this.productImage.isDisplayed();
    }

    addToCart() {
        this.addToCartButton.waitForClickable(2000);
        this.addToCartButton.click();
        this.closeNotificationBar.waitForDisplayed(5000);
        this.closeNotificationBar.click();
    }
}

export default new ProductPage()
