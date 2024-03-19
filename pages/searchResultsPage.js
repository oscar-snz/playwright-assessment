const { SearchComponent } = require('../components/searchComponent');
const { CartComponent } = require('../components/cartComponent');

const { expect } = require('expect');

class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.path = '/';
        this.searchComponent = new SearchComponent(page);
        this.cartComponent = new CartComponent(page);
        this.headerText= 'span[data-ui-id="page-title-wrapper"]';
        this.resultsPrice = 'div[class="price-box price-final_price"]';
        this.firstAddToCart = '(//button[@title="Add to Cart"])[1]';
        this.firstResult = '(//img[@class="product-image-photo"])[1]';
        this.successLabel = 'div[data-ui-id="message-success"]';
    }

    async validateSearchResults(expectedText){
        await this.page.waitForSelector(this.headerText);
        const priceElements = await this.page.$$(this.resultsPrice);
        const resultsText = await this.page.textContent(this.headerText);
        expect(resultsText).toBe(`Search results for: '${expectedText}'`);
        expect (priceElements.length > 0).toEqual(true);
    }

    async addToCart(){
        await this.page.hover(this.firstResult);
        await this.page.waitForSelector(this.firstAddToCart, { state: 'visible'} );
        await this.page.click(this.firstAddToCart);
        try {
            await this.page.waitForSelector(this.cartComponent.imgLoading, { state: 'visible', timeout: 2000});
            await this.page.waitForSelector(this.cartComponent.imgLoading, { state: 'hidden', timeout: 2000 } );
        } catch (e) {
            console.log('Loading indicator did not appear, proceeding.');
        }
    }

    
}


    module.exports = {SearchResultsPage};