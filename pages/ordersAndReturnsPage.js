
class OrdersAndReturnsPage {
    constructor(page) {
        this.page = page;
        this.path = '/sales/guest/form/';
        this.buttonContinue = '.action.submit.primary';
        this.textBoxOrderId = "input[id='oar-order-id']";
        this.textBoxLastName = "input[id='oar-billing-lastname']";
        this.textBoxEmail = "input[id='oar_email']";
        this.headerTitleOrder= 'h1';
        this.itemOrdered = '.product.name.product-item-name';
    }

    // Navigate to the home page
    async navigate() {
        await this.page.goto(`${BASE_URL}${this.path}`);
        await Promise.all([
            this.page.waitForSelector(this.buttonContinue, { state: 'visible'}),
            this.page.waitForSelector(this.textBoxOrderId, { state: 'visible' })
        ])};

    async searchOrder(orderId, shippingInfo){
        await this.page.fill(this.textBoxOrderId, orderId);
        await this.page.fill(this.textBoxLastName, shippingInfo.lastName);
        await this.page.fill(this.textBoxEmail, shippingInfo.email);
        await this.page.click(this.buttonContinue);
  
    }



   
}

module.exports = { OrdersAndReturnsPage };



