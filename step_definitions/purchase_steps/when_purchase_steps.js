const { When } = require('@cucumber/cucumber');
const { generateShippingInfo } = require('../../helpers/faker');


When('I add an item to my cart', async function () {
    await this.searchResultsPage.addToCart();
});

When('I fill the shipping address', async function () {
    const shippingInfo = generateShippingInfo();
    this.shippingInfo = shippingInfo;
    await this.shippingPage.enterShippingAddress(shippingInfo);
});

When('I place the order', async function () {
    await this.paymentPage.placeOrder();
});