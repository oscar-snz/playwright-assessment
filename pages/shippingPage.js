
const { expect } = require('expect');

class ShippingPage {
    constructor(page) {
        this.page = page;
        this.loaderSpinner = 'img[alt="Loading..."]';
        this.orderSummary= 'span[class="title"]';
        this.textBoxEmail = "(//input[@id='customer-email'])[1]";
        this.textBoxFName = "input[name='firstname']";
        this.textBoxLName = "input[name='lastname']";
        this.textBoxCompany = "input[name='company']";
        this.textBoxStreetAddress = "input[name='street[0]']";
        this.textBoxCity = "input[name='city']";
        this.dropdownState = "select[name='region_id']";
        this.textBoxZipCode = "input[name='postcode']";
        this.textBoxPhoneNumber = "input[name='telephone']";
        this.radioTableRate = "input[value='tablerate_bestway']";
        this.buttonNext = ".button.action.continue.primary";
    }

    async enterShippingAddress(shippingInfo){
        try {
            await this.page.waitForSelector(this.loaderSpinner, { state: 'visible', timeout: 2000});
            await this.page.waitForSelector(this.loaderSpinner, { state: 'hidden', timeout: 3000 } );
        } catch (e) {
            console.log('Spinner did not appear, proceeding.');
        }
        await this.page.fill(this.textBoxEmail, shippingInfo.email);
        await this.page.fill(this.textBoxFName, shippingInfo.firstName);
        await this.page.fill(this.textBoxLName, shippingInfo.lastName);
        await this.page.fill(this.textBoxCompany, shippingInfo.company);
        await this.page.fill(this.textBoxStreetAddress, shippingInfo.streetAddress);
        await this.page.fill(this.textBoxCity, shippingInfo.city);
        const firstOptionValue = await this.page.evaluate(selector => {
            const select = document.querySelector(selector);
            return select.options[1].value; 
        }, this.dropdownState);
        await this.page.selectOption(this.dropdownState, firstOptionValue);
        await this.page.fill(this.textBoxZipCode, shippingInfo.zipCode);
        await this.page.fill(this.textBoxPhoneNumber, shippingInfo.phoneNumber);
        await this.page.click(this.radioTableRate);
        await this.page.click(this.buttonNext);
        try {
            await this.page.waitForSelector(this.loaderSpinner, { state: 'visible', timeout: 2000});
            await this.page.waitForSelector(this.loaderSpinner, { state: 'hidden', timeout: 3000 } );
        } catch (e) {
            console.log('Spinner did not appear, proceeding.');
        }
    }
}

module.exports = {ShippingPage};