const { Then } = require('@cucumber/cucumber');
const { expect } = require('expect');



Then('the order should be placed', async function () {
    const resultsText = await this.page.textContent(this.checkoutSuccessPage.headerTitle);
    expect(resultsText).toContain('Thank you for your purchase!');
    const presentText = await this.page.textContent(this.checkoutSuccessPage.orderText);
    expect(presentText).toContain('Your order # is:');
    const orderIdMatch = presentText.match(/\d+/);
    this.orderId = orderIdMatch[0];

});