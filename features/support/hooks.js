const { BeforeAll, Before, AfterAll, After, setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { HomePage } = require('../../pages/homePage');
const { SearchResultsPage } = require('../../pages/searchResultsPage');
const { ShippingPage } = require('../../pages/shippingPage');
const { PaymentPage } = require('../../pages/paymentPage');
const { CheckoutSuccessPage } = require('../../pages/checkoutSuccessPage');
const { SearchComponent } = require('../../components/searchComponent');
const { OrdersAndReturnsPage } = require('../../pages/ordersAndReturnsPage');

const { chromium } = require('playwright');
const { CartComponent } = require('../../components/cartComponent');


global.BASE_URL = 'https://magento.softwaretestingboard.com';


class CustomWorld {
    constructor({ attach, log, parameters }) {
        this.attach = attach;
        this.log = log;
        this.parameters = parameters;
    }


}


setWorldConstructor(CustomWorld);

let browser;
let context;

setDefaultTimeout(15 * 1000);

BeforeAll({ timeout: 100 * 1000 }, async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
    if (!context) {
        context = await browser.newContext();
    }
    if (!this.page) {
        this.page = await context.newPage();
        this.homePage = new HomePage(this.page);
        this.searchResultsPage = new SearchResultsPage(this.page);
        this.shippingPage = new ShippingPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.checkoutSuccessPage = new CheckoutSuccessPage(this.page);
        this.searchComponent = new SearchComponent(this.page);
        this.cartComponent = new CartComponent(this.page);
        this.ordersAndReturnsPage = new OrdersAndReturnsPage(this.page)
    }
});


After(async function () {
    await this.page.close();
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.close();
});
