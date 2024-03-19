// features/support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
    async openBrowser() {
        this.browser = await chromium.launch({ headless: false }); // adjust based on your needs
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
