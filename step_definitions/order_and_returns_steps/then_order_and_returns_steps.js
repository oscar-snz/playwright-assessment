const { Then } = require('@cucumber/cucumber');
const { expect } = require('expect');

Then('I should find the order', async function () {
    const resultsText = await this.page.textContent(this.ordersAndReturnsPage.headerTitleOrder);
    expect(resultsText).toContain(this.orderId);
    const itemOrdered = await this.page.textContent(this.ordersAndReturnsPage.itemOrdered);
    expect(itemOrdered.toLowerCase()).toContain(this.newItem.toLowerCase());
  
});