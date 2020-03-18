import Page from './page';
import utl   from '../../utilities/common-utilities';

class HomePage extends Page {

    /**
    * define elements
    */
    get headerImage()       { return $('//img[@alt=\"Your store name\"]'); }
    get searchInput()       { return $('//input[@id="small-searchterms"]'); }
    get searchButton()      { return $('//input[@type="submit" and @value="Search"]'); }
    category(text)          { return $('//div[@class="header-menu"]/ul[@class="top-menu notmobile"]//a[.="'+text+' "]');} // Added space at the end because all categories have a space at the end which messes up detection.
    get shoppingCartLink()  { return $('//a[@class="ico-cart"]');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForHomePageToLoad () {
      if(!this.headerImage.isDisplayed()){
        this.headerImage.waitForDisplayed(10000);
      }
    }

    enterSearchText (item) {
      this.searchInput.clearValue();
      this.searchInput.setValue(item);
    }
  
    search () {
      this.searchButton.click();
    }

    hoverCategory(category) {
      this.category(category).moveTo();
    }

    selectCategory(category) {
      this.category(category).click();
    }

    gotoShoppingCart()
    {
      this.shoppingCartLink.waitForClickable(3000);
      this.shoppingCartLink.click();
    }
}

export default new HomePage()
