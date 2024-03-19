const { Then } = require('@cucumber/cucumber');
const { expect } = require('expect');


Then('the item should be added to cart', async function () {
    await this.page.click(this.cartComponent.goToCart);
    await this.page.waitForSelector(this.cartComponent.cartModal, { state: 'visible', timeout: 2000 });
    await this.page.waitForSelector(this.cartComponent.checkoutButton, { state: 'visible', timeout: 2000 });
    const itemText = await this.page.textContent(this.cartComponent.item);
    expect(itemText.toLowerCase()).toContain(this.newItem.toLowerCase());
    const totalCount = await this.page.textContent(this.cartComponent.itemsInCart);
    expect(totalCount).toBe("1");
});

Then('the order should be placed', async function () {
    const resultsText = await this.page.textContent(this.checkoutSuccessPage.headerTitle);
    expect(resultsText).toContain('Thank you for your purchase!');
    const presentText = await this.page.textContent(this.checkoutSuccessPage.orderText);
    expect(presentText).toContain('Your order # is:');
    const orderIdMatch = presentText.match(/\d+/);
    this.orderId = orderIdMatch[0];

});