const { When } = require('@cucumber/cucumber');
const config = require('../../testConfig'); 

When('I search for {string}', async function (item) {
    await this.searchComponent.searchForItem(item);
    await this.searchResultsPage.validateSearchResults(item);
    this.newItem = item;
});

When('I proceed to checkout', async function () {
    await this.cartComponent.proceedToCheckout();
});
