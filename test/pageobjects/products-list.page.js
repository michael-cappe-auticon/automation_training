import Page from './page';
import utl   from '../../utilities/common-utilities';

class ProductsListPage extends Page {

    /**
    * define elements
    */
    get searchResults()   { return $('//div[@class="product-grid"]')};
    searchResult(item)    { return $('//div[@class="product-item"]//h2[@class="product-title" and contains(.,"'+item+'")]')};
    get listTitle()       { return $('//div[@class="page-title"]/h1')};
    // addToCartButton(item) { return this.searchResult(item).$('//following-sibling::div[@class="add-info"]//input[@type="button" and @value="Add to cart"]')};
    addToCartButton(item) { return $('//div[@class="product-item"]//h2[@class="product-title" and contains(.,"'+item+'")]//following-sibling::div[@class="add-info"]//input[@type="button" and @value="Add to cart"]')};
    get closeNotificationBar() { return $('//div[@class="bar-notification success"]//span[@class="close"]');}

    /**
     * your page specific methods
     */

    hasProductsList() {
        this.searchResults.waitForDisplayed(3000);
        return this.searchResults.isDisplayed();
    }

    isProductInList(containsText) {
        return this.searchResult(containsText).isDisplayed();
    }

    selectProductInList(containsText) {
        this.searchResult(containsText).click();
    }

    addProductToCart(containsText) {
        this.addToCartButton(containsText).click();
        this.closeNotificationBar.waitForDisplayed(5000);
        this.closeNotificationBar.click();
    }

    getListTitle() {
        if(this.listTitle.isDisplayed())
        {
            return this.listTitle.getText();
        }
        return '';
    }
}

export default new ProductsListPage()
