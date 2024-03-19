const { defineStep } = require('@cucumber/cucumber');
const config = require('../../testConfig'); 

defineStep('I navigate to the {string} page', async function (pageName) {

    const normalizedPageName = pageName.toLowerCase();

    const PageClass = config.pages[normalizedPageName];
    if (!PageClass) {
        throw new Error(`No page object found for "${pageName}".`);
    }

    const pageObject = new PageClass(this.page);
    await pageObject.navigate();
});

