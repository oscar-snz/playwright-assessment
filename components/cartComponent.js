const { expect } = require('expect');

class CartComponent {
    constructor(page) {
        this.page = page;
        this.cartCount = '.counter-number';
        this.loaderSpinner = "div[class='loading-mask']";
        this.imgLoading = 'img[title="Loading..."]';
        this.goToCart = "a[class='action showcart']";
        this.cartModal = '.block.block-minicart.ui-dialog-content.ui-widget-content';
        this.checkoutButton = "button[id='top-cart-btn-checkout']";
        this.item = "//strong[@class='product-item-name']/a";
        this.itemsInCart = "span[class='count']";
    }

    // Method to search for an item
    async validateItemWasAdded(expectedAmount) {
        const cartCount = await this.page.textContent(this.cartCount);
        expect(cartCount).toEqual(expectedAmount);

    }

    async proceedToCheckout() {
        await this.page.click(this.goToCart);
        await this.page.waitForSelector(this.cartModal, { state: 'visible', timeout: 2000 });
        await this.page.click(this.checkoutButton);
    }
}

module.exports = { CartComponent };
