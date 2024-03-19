

class PaymentPage {
    constructor(page) {
        this.page = page;
        this.buttonPlaceOrder = '.action.primary.checkout';
        this.loaderSpinner = 'img[alt="Loading..."]';
    }

    async placeOrder(){
        try {
            await this.page.waitForSelector(this.loaderSpinner, { state: 'visible', timeout: 2000});
            await this.page.waitForSelector(this.loaderSpinner, { state: 'hidden', timeout: 3000 } );
        } catch (e) {
            console.log('Spinner did not appear, proceeding.');
        }
        await this.page.click(this.buttonPlaceOrder);
        try {
            await this.page.waitForSelector(this.loaderSpinner, { state: 'visible', timeout: 2000});
            await this.page.waitForSelector(this.loaderSpinner, { state: 'hidden', timeout: 3000 } );
        } catch (e) {
            console.log('Spinner did not appear, proceeding.');
        }
    }
}



module.exports = {PaymentPage};