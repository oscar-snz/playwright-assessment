const { Then } = require('@cucumber/cucumber');
const { expect } = require('expect');

Then('the cart should show {string} items', async function (expectedAmount) {
    await this.cartComponent.validateItemWasAdded(expectedAmount);
    const isElementVisible = await this.page.locator(this.searchResultsPage.successLabel).isVisible();
    expect (isElementVisible).toBe(true);
});