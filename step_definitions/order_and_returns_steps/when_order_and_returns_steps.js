const { When } = require('@cucumber/cucumber');


When('I search for the order placed', async function () {
    await this.ordersAndReturnsPage.searchOrder(this.orderId, this.shippingInfo);
    
});
